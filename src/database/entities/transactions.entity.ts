import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Action } from '../migrations/dictionary';
import { UserEntity } from './user.entity';

@Table({ tableName: 'transactions' })
export class TransactionsEntity extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  declare id: number;

  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @BelongsTo(() => UserEntity)
  declare user: UserEntity;

  @Column({
    type: DataType.ENUM(...Object.values(Action)),
    allowNull: false,
  })
  declare action: Action;

  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  declare amount: number;
}
