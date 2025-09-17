import { SetOptions } from '@redis/client';
export declare class CacheService {
    private readonly redis;
    set(key: string, value: Record<string, any>, options?: SetOptions): Promise<string | null>;
    get<T extends Record<string, any>>(key: string): Promise<T | null>;
    delete(key: string): Promise<number>;
    deleteForPattern(pattern: string): Promise<number>;
}
