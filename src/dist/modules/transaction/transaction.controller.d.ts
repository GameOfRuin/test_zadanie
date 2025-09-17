import { CreatePurchaseDto } from './dto';
import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    purchase(dto: CreatePurchaseDto): Promise<import("../../database/entities").TransactionsEntity | null>;
}
