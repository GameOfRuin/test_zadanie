"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TransactionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const cache_keys_1 = require("../../cache/cache.keys");
const cache_service_1 = require("../../cache/cache.service");
const entities_1 = require("../../database/entities");
const shared_1 = require("../../shared");
let TransactionService = TransactionService_1 = class TransactionService {
    redis;
    logger = new common_1.Logger(TransactionService_1.name);
    constructor(redis) {
        this.redis = redis;
    }
    async purchase(dto) {
        this.logger.log('Новая покупка предмета');
        const { userId, amount, action } = dto;
        const user = await entities_1.UserEntity.findOne({
            where: { id: userId },
            attributes: [
                'id',
                [
                    sequelize_typescript_1.Sequelize.cast(sequelize_typescript_1.Sequelize.col('balance'), 'DECIMAL'),
                    'balance',
                ],
            ],
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Пользователь не найден');
        }
        if (Number(amount) > Number(user.dataValues.balance)) {
            throw new common_1.ConflictException('недостаточно средств');
        }
        const newBalance = Number(user.dataValues.balance) - Number(amount);
        await entities_1.UserEntity.update({ balance: newBalance }, { where: { id: userId } });
        const transaction = await entities_1.TransactionsEntity.create({
            userId: dto.userId,
            amount,
            action,
        });
        await this.redis.set((0, cache_keys_1.redisTransactionKey)(transaction.id), transaction, {
            EX: 10 * shared_1.TimeInSeconds.minute,
        });
        return await entities_1.TransactionsEntity.findByPk(transaction.id, {
            include: [
                {
                    model: entities_1.UserEntity,
                    as: 'user',
                    attributes: ['id', 'balance'],
                },
            ],
        });
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = TransactionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cache_service_1.CacheService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map