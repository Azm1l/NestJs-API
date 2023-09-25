import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSysNumberingDto } from './dto/create-sys-numbering.dto';
import { UpdateSysNumberingDto } from './dto/update-sys-numbering.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SysNumberingService {
  constructor(private prisma: PrismaService) {}

  async create(createSysNumberingDto: CreateSysNumberingDto) {
    const createData = await this.prisma.tbl_sys_numbering.create({
      data: createSysNumberingDto,
    });
    return {
      success: true,
      data: createData,
    };
  }

  async findAll() {
    const allData = await this.prisma.tbl_sys_numbering.findMany();
    return {
      success: true,
      data: allData,
    };
  }

  async findOne(id: string) {
    const oneData = await this.prisma.tbl_sys_numbering.findUnique({
      where: { number_code: id },
    });

    if (!oneData) {
      throw new NotFoundException({
        success: false,
        message: 'Data not found',
      });
    }
    return {
      sucess: true,
      data: oneData,
    };
  }

  async update(id: string, updateSysNumberingDto: UpdateSysNumberingDto) {
    await this.prisma.tbl_sys_numbering.update({
      where: { number_code: id },
      data: updateSysNumberingDto,
    });
    return {
      success: true,
      message: 'Data has been updated',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} sysNumbering`;
  }
}
