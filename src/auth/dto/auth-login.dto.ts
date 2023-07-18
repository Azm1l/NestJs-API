import { IsString, IsNotEmpty } from 'class-validator';
export class AuthLoginDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
