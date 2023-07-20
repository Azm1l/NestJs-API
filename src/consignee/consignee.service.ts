import { Injectable } from '@nestjs/common';
import { CreateConsigneeDto } from './dto/create-consignee.dto';
import { UpdateConsigneeDto } from './dto/update-consignee.dto';

@Injectable()
export class ConsigneeService {
  create(createConsigneeDto: CreateConsigneeDto) {
    return 'This action adds a new consignee';
  }

  findAll() {
    return `This action returns all consignee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consignee`;
  }

  update(id: number, updateConsigneeDto: UpdateConsigneeDto) {
    return `This action updates a #${id} consignee`;
  }

  remove(id: number) {
    return `This action removes a #${id} consignee`;
  }
}
