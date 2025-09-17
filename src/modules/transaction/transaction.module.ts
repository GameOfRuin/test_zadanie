import { Global, Module } from '@nestjs/common';
import { CacheService } from '../../cache/cache.service';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Global()
@Module({
  controllers: [TransactionController],
  providers: [TransactionService, CacheService],
})
export class TransactionModule {}
