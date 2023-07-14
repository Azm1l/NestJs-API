import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
export class CreateSysNumberingDto {
  @IsString()
  @IsNotEmpty()
  number_code: string;

  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsNumber()
  @IsNotEmpty()
  last_number?: number = 0;

  @IsString()
  last_by?: string;

  @IsDate()
  last_datetime?: Date;
}
