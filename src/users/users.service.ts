import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = await this.prisma.tbl_sys_user.create({
      data: createUserDto,
    });
    return {
      succes: true,
      data: createdUser,
    };
  }

  async findAll() {
    const allData = await this.prisma.tbl_sys_user.findMany();
    return {
      success: true,
      data: allData,
    };
  }

  async findOne(id: string) {
    const oneData = await this.prisma.tbl_sys_user.findUnique({
      where: {
        username: id,
      },
    });

    if (!oneData) {
      throw new NotFoundException({
        success: false,
        message: 'User not found',
      });
    }
    return {
      success: true,
      data: oneData,
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.password = await bcrypt.hashSync(updateUserDto.password, 10);
    const updatedUser = await this.prisma.tbl_sys_user.update({
      where: {
        username: id,
      },
      data: updateUserDto,
    });
    return {
      success: true,
      data: updatedUser,
    };
  }
}
