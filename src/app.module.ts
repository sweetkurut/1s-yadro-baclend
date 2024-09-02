import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './accounts/entities/account.entity';
import { AccountHistory } from './account_history/entities/account_history.entity';
import { OperationService } from './operation/operation.service';
import { OperationController } from './operation/operation.controller';
import { Transaction } from './transactions/entities/transaction.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '',
      database: 'test-db',
      entities: ["dist/**/*.entity{.ts,.js}"],
    }),
    TypeOrmModule.forFeature([Account, AccountHistory, Transaction]),
  ],
  providers: [OperationService],
  controllers: [OperationController],
})
export class AppModule {}
