import { Injectable } from '@nestjs/common';
import { CreateAccountHistoryDto } from './dto/create-account_history.dto';
import { UpdateAccountHistoryDto } from './dto/update-account_history.dto';

@Injectable()
export class AccountHistoryService {
  create(createAccountHistoryDto: CreateAccountHistoryDto) {
    return 'This action adds a new accountHistory';
  }

  findAll() {
    return `This action returns all accountHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountHistory`;
  }

  update(id: number, updateAccountHistoryDto: UpdateAccountHistoryDto) {
    return `This action updates a #${id} accountHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountHistory`;
  }
}
