import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { SysNumberingService } from './sys-numbering.service';
import { CreateSysNumberingDto } from './dto/create-sys-numbering.dto';
import { UpdateSysNumberingDto } from './dto/update-sys-numbering.dto';

@Controller('sys-numbering')
export class SysNumberingController {
  constructor(private readonly sysNumberingService: SysNumberingService) {}

  @Post()
  create(@Body() createSysNumberingDto: CreateSysNumberingDto) {
    return this.sysNumberingService.create(createSysNumberingDto);
  }

  @Get()
  findAll() {
    return this.sysNumberingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sysNumberingService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSysNumberingDto: UpdateSysNumberingDto,
  ) {
    return this.sysNumberingService.update(id, updateSysNumberingDto);
  }
}
