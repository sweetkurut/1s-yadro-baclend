import { Module } from '@nestjs/common';
import { AccountHistoryService } from './account_history.service';
import { AccountHistoryController } from './account_history.controller';

@Module({
  controllers: [AccountHistoryController],
  providers: [AccountHistoryService],
})
export class AccountHistoryModule {}
