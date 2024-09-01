import { Test, TestingModule } from '@nestjs/testing';
import { AccountHistoryService } from './account_history.service';

describe('AccountHistoryService', () => {
  let service: AccountHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountHistoryService],
    }).compile();

    service = module.get<AccountHistoryService>(AccountHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
