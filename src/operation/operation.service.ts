import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/accounts/entities/account.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Repository } from 'typeorm';;

@Injectable()
export class OperationService {
  constructor(
    @InjectRepository(Account) private readonly accountRepository: Repository<Account>,
    @InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async processOperation(operationCode: string, sourceAccountNumber: string, targetAccountNumber: string, amount: number): Promise<void> {
    // Получение счетов из базы данных
    const sourceAccount = await this.accountRepository.findOne({ where: { account_number: sourceAccountNumber } });
    const targetAccount = await this.accountRepository.findOne({ where: { account_number: targetAccountNumber } });

    if (!sourceAccount || !targetAccount) {
      throw new Error('Invalid accounts');
    }

    // Выполнение операции
    if (operationCode === '01') {
      // Проверка достаточно ли средств на исходном счете
      if (sourceAccount.balance < amount) {
        throw new Error('Insufficient funds');
      }

      // Обновление балансов счетов
      sourceAccount.balance -= amount;
      targetAccount.balance += amount;

      // Сохранение изменений в базу данных
      await this.accountRepository.save(sourceAccount);
      await this.accountRepository.save(targetAccount);

      // Логгирование транзакции
      const transaction = this.transactionRepository.create({
        operation_code: operationCode,
        sourceAccount,
        targetAccount,
        amount,
      });

      await this.transactionRepository.save(transaction);
    }
  }
}
