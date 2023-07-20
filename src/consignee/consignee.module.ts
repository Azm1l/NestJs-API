import { Module } from '@nestjs/common';
import { ConsigneeService } from './consignee.service';
import { ConsigneeController } from './consignee.controller';

@Module({
  controllers: [ConsigneeController],
  providers: [ConsigneeService]
})
export class ConsigneeModule {}
