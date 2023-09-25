import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateUpdateBulkStatus {
  @IsNotEmpty()
  @IsNumber()
  mst_status_id: number;

  @IsNotEmpty()
  @IsString()
  econnote_form: string;

  @IsNotEmpty()
  @IsString()
  econnote_to: string;

  @IsNotEmpty()
  @IsString()
  remarks: string;

  @IsNotEmpty()
  @IsString()
  update_status_by: string;

  @IsNotEmpty()
  @IsDateString()
  update_status_time: string;
}
