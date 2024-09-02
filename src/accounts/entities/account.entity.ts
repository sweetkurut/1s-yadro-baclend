import { AccountHistory } from "src/account_history/entities/account_history.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('accounts')
export class Account {

  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'varchar', length: 50})
  account_number: string

  @OneToMany(() => AccountHistory, (history) => history.account)
  histories: AccountHistory[];

  @OneToMany(() => Transaction, (transaction) => transaction.sourceAccount)
  transactions: Transaction[];
  balance: number;

}
