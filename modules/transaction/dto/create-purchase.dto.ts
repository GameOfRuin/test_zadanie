import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsEnum, IsNumber } from 'class-validator';
import { Action } from '../../../database/migrations/dictionary';

export class CreatePurchaseDto {
  @IsNumber()
  @ApiProperty({
    description: 'Айди пользователя',
    example: '1',
  })
  userId: number;

  @IsEnum(Action)
  @ApiProperty({
    description: 'Какое действие с балансом запрашивает опльзователь',
    example: 'purchase',
  })
  action: Action;

  @IsDecimal()
  @ApiProperty({
    description: 'Величина изменения баланса',
    example: '100,21',
  })
  amount: number;
}
