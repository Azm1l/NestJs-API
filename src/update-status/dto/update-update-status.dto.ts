import { PartialType } from '@nestjs/mapped-types';
import { CreateUpdateStatusDto } from './create-update-status.dto';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class UpdateUpdateStatusDto extends PartialType(CreateUpdateStatusDto) {
  @IsNumber()
  mst_status_id: number;

  @IsString()
  remarks: string;

  @IsDateString()
  update_status_time: string;
}
