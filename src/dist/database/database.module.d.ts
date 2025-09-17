import { OnApplicationShutdown } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
export declare class DatabaseModule implements OnApplicationShutdown {
    private readonly sequelize;
    constructor(sequelize: Sequelize);
    onApplicationShutdown(): Promise<void>;
}
