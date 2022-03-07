import { Injectable } from '@nestjs/common';
import { Lodger } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomLogin } from 'src/utils';
import { CreateLodgerDto } from './dto/create-lodger.dto';
import { UpdateLodgerDto } from './dto/update-lodger.dto';

@Injectable()
export class LodgersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateLodgerDto): Promise<Lodger> {
    const login = randomLogin();
    return this.prisma.lodger.create({ data: { ...data, login } });
  }

  async findMany(): Promise<Array<Lodger>> {
    return this.prisma.lodger.findMany();
  }

  async findOne(id: string): Promise<Lodger> {
    return this.prisma.lodger.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateLodgerDto): Promise<Lodger> {
    return this.prisma.lodger.update({ data, where: { id } });
  }

  async remove(id: string): Promise<Lodger> {
    return this.prisma.lodger.delete({ where: { id } });
  }
}
