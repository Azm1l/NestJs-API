import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerModule } from './customer/customer.module';
import { SysNumberingModule } from './sys-numbering/sys-numbering.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConsigneeModule } from './consignee/consignee.module';
import { UpdateStatusModule } from './update-status/update-status.module';
import { MasterstatusModule } from './masterstatus/masterstatus.module';

@Module({
  imports: [
    PrismaModule,
    CustomerModule,
    SysNumberingModule,
    AuthModule,
    UsersModule,
    ConsigneeModule,
    UpdateStatusModule,
    MasterstatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
