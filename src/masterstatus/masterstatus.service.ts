import { Injectable } from '@nestjs/common';
import { CreateMasterstatusDto } from './dto/create-masterstatus.dto';
import { UpdateMasterstatusDto } from './dto/update-masterstatus.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MasterstatusService {
  constructor(private Prisma: PrismaService) {}

  create(createMasterstatusDto: CreateMasterstatusDto) {
    return 'This action adds a new masterstatus';
  }

  async findAll() {
    const data = await this.Prisma.tbl_master_connot_status.findMany();
    return {
      success: true,
      data: data,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} masterstatus`;
  }

  update(id: number, updateMasterstatusDto: UpdateMasterstatusDto) {
    return `This action updates a #${id} masterstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterstatus`;
  }
}
