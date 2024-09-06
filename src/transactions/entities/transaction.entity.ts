import { Account } from 'src/accounts/entities/account.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  operation_code: string;

  @ManyToOne(() => Account, (account) => account.transactions)
  sourceAccount: Account;

  @ManyToOne(() => Account, (account) => account.transactions)
  targetAccount: Account;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  amount: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
