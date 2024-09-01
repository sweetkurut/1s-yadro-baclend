import { Test, TestingModule } from '@nestjs/testing';
import { AccountHistoryController } from './account_history.controller';
import { AccountHistoryService } from './account_history.service';

describe('AccountHistoryController', () => {
  let controller: AccountHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountHistoryController],
      providers: [AccountHistoryService],
    }).compile();

    controller = module.get<AccountHistoryController>(AccountHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
