import { Module } from '@nestjs/common';
import { UpdateStatusService } from './update-status.service';
import { UpdateStatusController } from './update-status.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UpdateStatusController],
  providers: [UpdateStatusService],
})
export class UpdateStatusModule {}
