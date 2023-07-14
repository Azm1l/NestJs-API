import { Module } from '@nestjs/common';
import { SysNumberingService } from './sys-numbering.service';
import { SysNumberingController } from './sys-numbering.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SysNumberingController],
  providers: [SysNumberingService],
})
export class SysNumberingModule {}
