import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerModule } from './customer/customer.module';
import { SysNumberingModule } from './sys-numbering/sys-numbering.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CustomerModule, SysNumberingModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
