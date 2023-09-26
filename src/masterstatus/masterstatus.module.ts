import { Module } from '@nestjs/common';
import { MasterstatusService } from './masterstatus.service';
import { MasterstatusController } from './masterstatus.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MasterstatusController],
  providers: [MasterstatusService],
})
export class MasterstatusModule {}
