import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountHistoryDto } from './create-account_history.dto';

export class UpdateAccountHistoryDto extends PartialType(CreateAccountHistoryDto) {}
