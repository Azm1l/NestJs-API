import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const getNumber = await this.prisma.tbl_sys_numbering.findUnique({
      where: { number_code: 'CUST' },
    });

    const data = getNumber.last_number + 1;

    createCustomerDto.customer_id =
      getNumber.prefix.substring(
        0,
        getNumber.prefix.length - data.toString().length,
      ) + data;

    const createData = await this.prisma.customer.create({
      data: createCustomerDto,
    });

    await this.prisma.tbl_sys_numbering.update({
      where: { number_code: 'CUST' },
      data: { last_number: data },
    });

    return {
      success: true,
      data: createData,
    };
  }

  async findAll() {
    const allData = await this.prisma.customer.findMany();
    return {
      success: true,
      data: allData,
    };
  }

  async findOne(id: string) {
    const oneData = await this.prisma.customer.findUnique({
      where: { customer_id: id },
    });

    if (!oneData) {
      throw new NotFoundException({
        success: false,
        message: 'Customer not found',
      });
    }

    return {
      success: true,
      data: oneData,
    };
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const updateData = await this.prisma.customer.update({
      where: { customer_id: id },
      data: {
        ...updateCustomerDto,
        update_datetime: new Date(),
      },
    });
    return {
      success: true,
      data: updateData,
    };
  }
}
