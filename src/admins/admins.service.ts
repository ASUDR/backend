import { Injectable } from '@nestjs/common';
import { Admin } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomLogin } from 'src/utils';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAdminDto): Promise<Admin> {
    const login = randomLogin();
    const { firstName, lastName, patronymic, roleId, facultiesIds } = data;
    const role = roleId ? { connect: { id: roleId } } : undefined;
    const faculties = facultiesIds
      ? { connect: facultiesIds.map((id) => ({ id })) }
      : undefined;

    return this.prisma.admin.create({
      data: {
        firstName,
        lastName,
        patronymic,
        login,
        role,
        faculties,
      },
    });
  }

  async findMany(): Promise<Array<Admin>> {
    return this.prisma.admin.findMany();
  }

  async findOne(id: string): Promise<Admin> {
    return this.prisma.admin.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateAdminDto): Promise<Admin> {
    const { login, firstName, lastName, patronymic, roleId, facultiesIds } =
      data;
    const role = roleId ? { connect: { id: roleId } } : undefined;
    const faculties = facultiesIds
      ? { connect: facultiesIds.map((id) => ({ id })) }
      : undefined;

    return this.prisma.admin.update({
      where: { id },
      data: {
        firstName,
        lastName,
        patronymic,
        login,
        role,
        faculties,
      },
    });
  }

  async remove(id: string): Promise<Admin> {
    return this.prisma.admin.delete({ where: { id } });
  }
}
