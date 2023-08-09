import { Module } from '@nestjs/common';
import { ConsigneeService } from './consignee.service';
import { ConsigneeController } from './consignee.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ConsigneeController],
  providers: [ConsigneeService],
})
export class ConsigneeModule {}
