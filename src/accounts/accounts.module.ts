import { forwardRef, Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { OperationModule } from 'src/operation/operation.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    forwardRef(() => OperationModule), 
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [AccountsService, TypeOrmModule],
})
export class AccountsModule {}
