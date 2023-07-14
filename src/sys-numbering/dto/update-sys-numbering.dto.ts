import { PartialType } from '@nestjs/mapped-types';
import { CreateSysNumberingDto } from './create-sys-numbering.dto';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class UpdateSysNumberingDto extends PartialType(CreateSysNumberingDto) {
  @IsNotEmpty()
  @IsNumber()
  last_number: number;

  @IsString()
  last_by?: string;

  @IsDate()
  last_date?: Date;
}
