import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ConsigneeService } from './consignee.service';
import { CreateConsigneeDto } from './dto/create-consignee.dto';
import { UpdateConsigneeDto } from './dto/update-consignee.dto';

@Controller('consignee')
export class ConsigneeController {
  constructor(private readonly consigneeService: ConsigneeService) {}

  @Post()
  create(@Body() createConsigneeDto: CreateConsigneeDto) {
    return this.consigneeService.create(createConsigneeDto);
  }

  @Get()
  findAll() {
    return this.consigneeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consigneeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConsigneeDto: UpdateConsigneeDto,
  ) {
    return this.consigneeService.update(id, updateConsigneeDto);
  }
}
