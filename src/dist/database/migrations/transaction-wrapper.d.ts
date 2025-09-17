import { QueryInterface, Transaction } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
type MigrationFn = (transaction: Transaction, queryInterface: QueryInterface, sequelize: Sequelize) => Promise<void>;
export declare const wrapWithTransaction: (migrationFn: MigrationFn) => (queryInterface: QueryInterface, sequelize: Sequelize) => Promise<void>;
export {};
