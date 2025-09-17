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
exports.CreatePurchaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const dictionary_1 = require("../../../database/migrations/dictionary");
class CreatePurchaseDto {
    userId;
    action;
    amount;
}
exports.CreatePurchaseDto = CreatePurchaseDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Айди пользователя',
        example: '1',
    }),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(dictionary_1.Action),
    (0, swagger_1.ApiProperty)({
        description: 'Какое действие с балансом запрашивает опльзователь',
        example: 'purchase',
    }),
    __metadata("design:type", String)
], CreatePurchaseDto.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    (0, swagger_1.ApiProperty)({
        description: 'Величина изменения баланса',
        example: '100,21',
    }),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "amount", void 0);
//# sourceMappingURL=create-purchase.dto.js.map