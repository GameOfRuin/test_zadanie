import { OnApplicationShutdown } from '@nestjs/common';
import { RedisClientType } from '@redis/client';
export declare class CacheModule implements OnApplicationShutdown {
    private readonly redis;
    constructor(redis: RedisClientType);
    onApplicationShutdown(): Promise<void>;
}
