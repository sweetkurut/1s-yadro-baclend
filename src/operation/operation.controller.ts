import { Controller, Post, Body } from '@nestjs/common';
import { OperationService } from './operation.service';

@Controller('operations')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Post()
  async executeOperation(
    @Body('operationCode') operationCode: string,
    @Body('sourceAccount') sourceAccount: string,
    @Body('targetAccount') targetAccount: string,
    @Body('amount') amount: number,
  ): Promise<void> {
    await this.operationService.processOperation(operationCode, sourceAccount, targetAccount, amount);
  }
}
