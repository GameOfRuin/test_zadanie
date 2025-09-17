"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisProvider = exports.REDIS = void 0;
const redis_1 = require("redis");
const config_1 = require("../config");
exports.REDIS = 'REDIS';
exports.redisProvider = {
    provide: exports.REDIS,
    useFactory: async () => {
        const redis = (0, redis_1.createClient)({ url: config_1.appConfig.redisUrl });
        await redis.connect();
        return redis;
    },
};
//# sourceMappingURL=cache.provider.js.map