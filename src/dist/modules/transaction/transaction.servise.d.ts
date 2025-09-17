import { CacheService } from '../../cache/cache.service';
import { TransactionsEntity } from '../../database/entities';
import { CreatePurchaseDto } from './dto';
export declare class TransactionService {
    private readonly redis;
    private readonly logger;
    constructor(redis: CacheService);
    purchase(dto: CreatePurchaseDto): Promise<TransactionsEntity | null>;
}
