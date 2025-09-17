import { UserEntity } from '../database/entities';

export const redisTransactionKey = (id: UserEntity['id']) =>
  `userId:${id}`;
