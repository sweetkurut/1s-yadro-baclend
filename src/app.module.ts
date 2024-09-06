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
      username: 'admin',
      password: 'qwerty',
      database: 'nestTest',
      logging: true,
      options: {
        encrypt: false, 
        trustServerCertificate: true, // доверять самоподписанным сертификатам
      },
    }),
    
    TypeOrmModule.forFeature([Account, AccountHistory, Transaction]),
  ],
  providers: [OperationService],
  controllers: [OperationController],
})
export class AppModule {}


// DB_USER=admin
// DB_PASSWORD=qwerty
// DB_SERVER=localhost
// DB_NAME=passControllApp
// DB_PORT=1433
