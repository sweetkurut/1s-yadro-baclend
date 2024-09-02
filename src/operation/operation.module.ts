import { forwardRef, Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from './entities/operation.entity';
import { AccountsModule } from 'src/accounts/accounts.module';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Operation]),
    forwardRef(() => AccountsModule),
    TransactionsModule,
  ],
  controllers: [OperationController],
  providers: [OperationService],
  exports: [OperationService], 
})
export class OperationModule {}
