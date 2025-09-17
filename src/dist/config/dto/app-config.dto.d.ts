import { PostgresConfigDto } from './postgres-config.dto';
export declare class AppConfigDto {
    port: number;
    redisUrl: string;
    postgres: PostgresConfigDto;
}
