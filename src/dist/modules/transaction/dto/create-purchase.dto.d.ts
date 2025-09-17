import { Action } from '../../../database/migrations/dictionary';
export declare class CreatePurchaseDto {
    userId: number;
    action: Action;
    amount: number;
}
