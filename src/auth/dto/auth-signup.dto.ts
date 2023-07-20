import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class AuthSignupDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
