"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWithTransaction = void 0;
const wrapWithTransaction = (migrationFn) => {
    return async (queryInterface, sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await migrationFn(transaction, queryInterface, sequelize);
            await transaction.commit();
        }
        catch (error) {
            await transaction.rollback();
            throw error;
        }
    };
};
exports.wrapWithTransaction = wrapWithTransaction;
//# sourceMappingURL=transaction-wrapper.js.map