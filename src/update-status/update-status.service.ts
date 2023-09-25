import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUpdateStatusDto } from './dto/create-update-status.dto';
import { UpdateUpdateStatusDto } from './dto/update-update-status.dto';
import { CreateUpdateBulkStatus } from './dto/create-update-bulk-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateStatusService {
  constructor(private prisma: PrismaService) {}

  async create(createUpdateStatusDto: CreateUpdateStatusDto) {
    const data = await this.prisma.tbl_connot_status.create({
      data: createUpdateStatusDto,
    });

    console.log(createUpdateStatusDto.update_status_time);
    return {
      success: true,
      data: data,
    };
  }

  async createBulk(createUpdateBulkStatus: CreateUpdateBulkStatus) {
    const bulkData = await this.prisma.$queryRaw`
    call update_bulk_status(
                                        ${createUpdateBulkStatus.econnote_form},
                                        ${createUpdateBulkStatus.econnote_to},
                                        ${createUpdateBulkStatus.mst_status_id},
                                        ${createUpdateBulkStatus.update_status_time},
                                        ${createUpdateBulkStatus.remarks},
                                        ${createUpdateBulkStatus.update_status_by}
                                        )`;
    return {
      success: true,
      data: 'data has been created',
    };
  }

  findAll() {
    return `This action returns all updateStatus`;
  }

  async findOne(id: string) {
    const oneData = await this.prisma.tbl_connot_status.findMany({
      where: { econnote_number: id },
    });

    if (!oneData) {
      throw new NotFoundException({
        success: false,
        message: 'Data not found',
      });
    }

    return {
      status: true,
      data: oneData,
    };
  }

  async update(id: number, updateUpdateStatusDto: UpdateUpdateStatusDto) {
    id = Number(id);
    const updateData = await this.prisma.tbl_connot_status.update({
      where: { id: id },
      data: updateUpdateStatusDto,
    });

    if (!updateData) {
      throw new NotFoundException({
        success: false,
        message: 'Data not found',
      });
    }

    return {
      success: true,
      data: updateData,
    };
  }

  async remove(id: number, econnote_number: string) {
    const deleteData = await this.prisma.tbl_connot_status.delete({
      where: { id: id, econnote_number: econnote_number },
    });

    return {
      success: true,
      data: 'Data has been deleted',
    };
  }
}
