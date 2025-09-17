import { Provider } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { Model, Sequelize } from 'sequelize-typescript';
export declare const SEQUELIZE = "SEQUELIZE";
export declare const sequelizeProvider: Provider<Sequelize>;
export declare const entityProviders: {
    provide: string;
    useValue: ClassConstructor<Model<any, any>>;
}[];
