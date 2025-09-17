import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { redisTransactionKey } from '../../cache/cache.keys';
import { CacheService } from '../../cache/cache.service';
import {
  TransactionsEntity,
  UserEntity,
} from '../../database/entities';
import { TimeInSeconds } from '../../shared';
import { CreatePurchaseDto } from './dto';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name);

  constructor(private readonly redis: CacheService) {}

  async purchase(dto: CreatePurchaseDto) {
    this.logger.log('Новая покупка предмета');

    const { userId, amount, action } = dto;

    const user = await UserEntity.findOne({
      where: { id: userId },
      attributes: [
        'id',
        [
          Sequelize.cast(Sequelize.col('balance'), 'DECIMAL'),
          'balance',
        ],
      ],
    });
    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }

    if (Number(amount) > Number(user.dataValues.balance)) {
      throw new ConflictException('недостаточно средств');
    }

    const newBalance =
      Number(user.dataValues.balance) - Number(amount);

    await UserEntity.update(
      { balance: newBalance },
      { where: { id: userId } },
    );

    const transaction = await TransactionsEntity.create({
      userId: dto.userId,
      amount,
      action,
    });

    await this.redis.set(
      redisTransactionKey(transaction.id),
      transaction,
      {
        EX: 10 * TimeInSeconds.minute,
      },
    );

    return await TransactionsEntity.findByPk(transaction.id, {
      include: [
        {
          model: UserEntity,
          as: 'user',
          attributes: ['id', 'balance'],
        },
      ],
    });
  }
}
