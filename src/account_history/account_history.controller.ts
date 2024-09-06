import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountHistoryService } from './account_history.service';
import { CreateAccountHistoryDto } from './dto/create-account_history.dto';
import { UpdateAccountHistoryDto } from './dto/update-account_history.dto';

@Controller('account-history')
export class AccountHistoryController {
  constructor(private readonly accountHistoryService: AccountHistoryService) {}

  @Post()
  create(@Body() createAccountHistoryDto: CreateAccountHistoryDto) {
    return this.accountHistoryService.create(createAccountHistoryDto);
  }

  @Get()
  findAll() {
    return this.accountHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountHistoryDto: UpdateAccountHistoryDto) {
    return this.accountHistoryService.update(+id, updateAccountHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountHistoryService.remove(+id);
  }
}
