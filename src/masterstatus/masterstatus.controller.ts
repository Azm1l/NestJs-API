import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterstatusService } from './masterstatus.service';
import { CreateMasterstatusDto } from './dto/create-masterstatus.dto';
import { UpdateMasterstatusDto } from './dto/update-masterstatus.dto';

@Controller('masterstatus')
export class MasterstatusController {
  constructor(private readonly masterstatusService: MasterstatusService) {}

  @Post()
  create(@Body() createMasterstatusDto: CreateMasterstatusDto) {
    return this.masterstatusService.create(createMasterstatusDto);
  }

  @Get()
  findAll() {
    return this.masterstatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterstatusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMasterstatusDto: UpdateMasterstatusDto,
  ) {
    return this.masterstatusService.update(+id, updateMasterstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterstatusService.remove(+id);
  }
}
