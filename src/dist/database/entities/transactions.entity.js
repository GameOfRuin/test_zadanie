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
exports.TransactionsEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dictionary_1 = require("../migrations/dictionary");
const user_entity_1 = require("./user.entity");
let TransactionsEntity = class TransactionsEntity extends sequelize_typescript_1.Model {
};
exports.TransactionsEntity = TransactionsEntity;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TransactionsEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TransactionsEntity.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], TransactionsEntity.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(dictionary_1.Action)),
        allowNull: false,
    }),
    __metadata("design:type", String)
], TransactionsEntity.prototype, "action", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(15, 2),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TransactionsEntity.prototype, "amount", void 0);
exports.TransactionsEntity = TransactionsEntity = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'transactions' })
], TransactionsEntity);
//# sourceMappingURL=transactions.entity.js.map