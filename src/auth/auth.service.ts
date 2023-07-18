import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.prisma.tbl_sys_user.findUnique({
      where: { username: authLoginDto.username },
    });
    if (!user) {
      throw new NotFoundException({
        success: false,
        message: 'User not found',
      });
    }
    const isPasswordValid = await bcrypt.compareSync(
      authLoginDto.password,
      user.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException({
        success: false,
        message: 'Password is not valid',
      });

    return {
      success: true,
      data: user,
    };
  }
}
