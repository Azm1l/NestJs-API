import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCustomerDto {
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

  @IsString()
  email?: string;

  @IsString()
  contact_person?: string;

  @IsString()
  contact_person_handphone?: string;

  @IsString()
  description?: string;
}
