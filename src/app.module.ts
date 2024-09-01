import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RecordsModule } from './records/records.module';
import { HistoryModule } from './history/history.module';
import { UserModule } from './user/user.module';
import { OperationsModule } from './operations/operations.module';
import { ArrayOfAccountsModule } from './array-of-accounts/array-of-accounts.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountHistoryModule } from './account_history/account_history.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AuthModule, RecordsModule, HistoryModule, UserModule, OperationsModule, ArrayOfAccountsModule, AccountsModule, AccountHistoryModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
