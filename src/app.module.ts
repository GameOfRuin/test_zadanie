import { Module } from '@nestjs/common';
import { CacheModule } from './cache/cache.module';
import { DatabaseModule } from './database';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [DatabaseModule, CacheModule, TransactionModule],
})
export class AppModule {}
