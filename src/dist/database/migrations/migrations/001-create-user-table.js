"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dictionary_1 = require("../dictionary");
const transaction_wrapper_1 = require("../transaction-wrapper");
module.exports = {
    up: (0, transaction_wrapper_1.wrapWithTransaction)(async (transaction, queryInterface, sequelize) => {
        return queryInterface.createTable(dictionary_1.Tables.users, {
            [dictionary_1.Columns.id]: {
                type: sequelize_typescript_1.DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            [dictionary_1.Columns.balance]: {
                type: sequelize_typescript_1.DataType.DECIMAL(15, 2),
                allowNull: true,
            },
            [dictionary_1.Columns.createdAt]: {
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false,
                defaultValue: sequelize_typescript_1.Sequelize.literal('NOW()'),
            },
            [dictionary_1.Columns.updatedAt]: {
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false,
                defaultValue: sequelize_typescript_1.Sequelize.literal('NOW()'),
            },
        }, { transaction });
    }),
    down: (0, transaction_wrapper_1.wrapWithTransaction)(async (transaction, queryInterface, sequelize) => {
        return queryInterface.dropTable(dictionary_1.Tables.users, { transaction });
    }),
};
//# sourceMappingURL=001-create-user-table.js.map