import { UserEntity } from '../database/entities';
export declare const redisTransactionKey: (id: UserEntity["id"]) => string;
