"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityProviders = exports.sequelizeProvider = exports.SEQUELIZE = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../config");
const entities = require("./entities");
exports.SEQUELIZE = 'SEQUELIZE';
exports.sequelizeProvider = {
    provide: exports.SEQUELIZE,
    useFactory: async () => {
        const sequelize = new sequelize_typescript_1.Sequelize({
            ...config_1.appConfig.postgres,
            dialect: 'postgres',
            logging: false,
        });
        sequelize.addModels(Object.values(entities));
        await sequelize.authenticate();
        return sequelize;
    },
};
exports.entityProviders = Object.values(entities).map((entity) => ({
    provide: entity.name,
    useValue: entity,
}));
//# sourceMappingURL=sequelize.providers.js.map