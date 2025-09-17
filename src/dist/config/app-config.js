"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dotenv_1 = require("dotenv");
const process = require("node:process");
const dto_1 = require("./dto");
(0, dotenv_1.config)();
const rawConfig = {
    port: process.env.PORT,
    redisUrl: process.env.REDIS_URL,
    postgres: {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    },
    jwt: {
        accessSecret: process.env.JWT_ACCESS_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
    },
};
exports.appConfig = (0, class_transformer_1.plainToInstance)(dto_1.AppConfigDto, rawConfig);
const errors = (0, class_validator_1.validateSync)(exports.appConfig);
if (errors.length) {
    const [{ constraints }] = errors;
    if (constraints) {
        throw new common_1.BadRequestException(constraints[Object.keys(constraints)[0]]);
    }
    throw new common_1.BadRequestException('Unknown validate error');
}
//# sourceMappingURL=app-config.js.map