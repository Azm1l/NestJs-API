import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConsigneeDto } from './dto/create-consignee.dto';
import { UpdateConsigneeDto } from './dto/update-consignee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsigneeService {
  constructor(private prisma: PrismaService) {}

  async create(createConsigneeDto: CreateConsigneeDto) {
    const getNumber = await this.prisma.tbl_sys_numbering.findUnique({
      where: { number_code: 'CNEE' },
    });

    const data = getNumber.last_number + 1;

    createConsigneeDto.consignee_id =
      getNumber.prefix.substring(
        0,
        getNumber.prefix.length - data.toString().length,
      ) + data;

    const createData = await this.prisma.consignee.create({
      data: createConsigneeDto,
    });

    await this.prisma.tbl_sys_numbering.update({
      where: { number_code: 'CNEE' },
      data: { last_number: data },
    });
    return {
      success: true,
      data: createData,
    };
  }

  async findAll() {
    const allData = await this.prisma.consignee.findMany();
    return {
      success: true,
      data: allData,
    };
  }

  async findOne(id: string) {
    const data = await this.prisma.consignee.findUnique({
      where: { consignee_id: id },
    });

    if (!data) {
      throw new NotFoundException({
        success: false,
        message: 'Consignee not found',
      });
    }

    return {
      success: true,
      data: data,
    };
  }

  async update(id: string, updateConsigneeDto: UpdateConsigneeDto) {
    const updateData = await this.prisma.consignee.update({
      where: { consignee_id: id },
      data: updateConsigneeDto,
    });
    return {
      success: true,
      data: updateData,
    };
  }
}
