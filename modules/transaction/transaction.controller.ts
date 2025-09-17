import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CreatePurchaseDto } from './dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
  ) {}

  @ApiCreatedResponse({
    description: 'Возвращает пользователя с обновленным балансом',
    type: CreatePurchaseDto,
  })
  @ApiOperation({ summary: 'Покупка предмета' })
  @Post('purchase')
  async purchase(@Body() dto: CreatePurchaseDto) {
    return this.transactionService.purchase(dto);
  }
}
