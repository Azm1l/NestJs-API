import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateStatusService } from './update-status.service';
import { CreateUpdateStatusDto } from './dto/create-update-status.dto';
import { UpdateUpdateStatusDto } from './dto/update-update-status.dto';
import { CreateUpdateBulkStatus } from './dto/create-update-bulk-status.dto';

@Controller('update-status')
export class UpdateStatusController {
  constructor(private readonly updateStatusService: UpdateStatusService) {}

  @Post()
  create(@Body() createUpdateStatusDto: CreateUpdateStatusDto) {
    return this.updateStatusService.create(createUpdateStatusDto);
  }

  @Post('/bulk')
  createBulk(@Body() createUpdateBulkStatus: CreateUpdateBulkStatus) {
    return this.updateStatusService.createBulk(createUpdateBulkStatus);
  }

  @Get()
  findAll() {
    return this.updateStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.updateStatusService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body() updateUpdateStatusDto: UpdateUpdateStatusDto,
  ) {
    return this.updateStatusService.update(id, updateUpdateStatusDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Param('econnote_number') econnote_number: string,
  ) {
    return this.updateStatusService.remove(+id, econnote_number);
  }
}
