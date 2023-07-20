import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class CreateConsigneeDto {
  @IsNotEmpty()
  @IsString()
  consignee_id: string;

  @IsNumber()
  customer_type_id: number;

  @IsNotEmpty()
  @IsString()
  consignee_name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  zip_code: string;

  @IsNotEmpty()
  @IsString()
  city_code: string;

  @IsPhoneNumber('ID')
  phone: string;

  @IsString()
  fax_number: string;

  @IsEmail()
  email: string;

  @IsString()
  description: string;

  @IsString()
  created_by: string;

  @IsDate()
  created_date: Date;

  @IsDate()
  updated_datetime: Date;
}
