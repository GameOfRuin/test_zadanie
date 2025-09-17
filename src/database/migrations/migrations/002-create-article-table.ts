import { QueryInterface, Transaction } from 'sequelize';
import { DataType, Sequelize } from 'sequelize-typescript';
import { Action, Columns, Tables } from '../dictionary';
import { wrapWithTransaction } from '../transaction-wrapper';

module.exports = {
  up: wrapWithTransaction(
    async (
      transaction: Transaction,
      queryInterface: QueryInterface,
      sequelize: Sequelize,
    ): Promise<void> => {
      return queryInterface.createTable(
        Tables.transactions,
        {
          [Columns.id]: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          [Columns.amount]: {
            type: DataType.DECIMAL(15, 2),
            allowNull: true,
          },
          [Columns.action]: {
            type: DataType.ENUM(...Object.values(Action)),
            allowNull: false,
          },
          [Columns.createdAt]: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('NOW()'),
          },
          [Columns.updatedAt]: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('NOW()'),
          },
          [Columns.userId]: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
              model: Tables.users,
              key: Columns.id,
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        },
        { transaction },
      );
    },
  ),

  down: wrapWithTransaction(
    async (
      transaction: Transaction,
      queryInterface: QueryInterface,
      sequelize: Sequelize,
    ): Promise<void> => {
      return queryInterface.dropTable(Tables.transactions, {
        transaction,
      });
    },
  ),
};
