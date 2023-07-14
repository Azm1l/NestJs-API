import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsNumber()
  customer_type_id: number;

  @IsString()
  customer_name: string;

  @IsString()
  address: string;

  @IsString()
  city_code: string;

  @IsString()
  phone: string;

  @IsString()
  fax_number: string;

  @IsEmail()
  email: string;

  @IsString()
  contact_person: string;

  @IsString()
  contact_person_handphone: string;

  @IsString()
  description: string;
}
