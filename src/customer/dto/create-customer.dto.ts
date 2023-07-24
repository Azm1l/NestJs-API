import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmail,
  IsDate,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  customer_id: string;

  @IsNotEmpty()
  @IsNumber()
  customer_type_id: number;

  @IsNotEmpty()
  @IsString()
  customer_name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city_code: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsString()
  fax_number?: string;

  @IsEmail()
  email?: string;

  @IsString()
  contact_person?: string;

  @IsString()
  contact_person_handphone?: string;

  @IsString()
  description?: string;

  @IsDate()
  create_datetime = new Date();
}
