"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
const common_1 = require("@nestjs/common");
const cache_provider_1 = require("./cache.provider");
let CacheService = class CacheService {
    redis;
    async set(key, value, options) {
        const json = JSON.stringify(value);
        return this.redis.set(key, json, options);
    }
    async get(key) {
        const value = await this.redis.get(key);
        if (value === null) {
            return null;
        }
        return JSON.parse(value);
    }
    async delete(key) {
        return this.redis.del(key);
    }
    async deleteForPattern(pattern) {
        const keys = await this.redis.keys(pattern);
        if (keys.length > 0) {
            await this.redis.del(keys);
        }
        return keys.length;
    }
};
exports.CacheService = CacheService;
__decorate([
    (0, common_1.Inject)(cache_provider_1.REDIS),
    __metadata("design:type", Object)
], CacheService.prototype, "redis", void 0);
exports.CacheService = CacheService = __decorate([
    (0, common_1.Injectable)()
], CacheService);
//# sourceMappingURL=cache.service.js.map