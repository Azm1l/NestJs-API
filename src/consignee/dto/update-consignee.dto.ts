import { PartialType } from '@nestjs/mapped-types';
import { CreateConsigneeDto } from './create-consignee.dto';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class UpdateConsigneeDto extends PartialType(CreateConsigneeDto) {
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
}
