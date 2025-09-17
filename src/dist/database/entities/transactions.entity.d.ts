import { Model } from 'sequelize-typescript';
import { Action } from '../migrations/dictionary';
import { UserEntity } from './user.entity';
export declare class TransactionsEntity extends Model {
    id: number;
    userId: number;
    user: UserEntity;
    action: Action;
    amount: number;
}
