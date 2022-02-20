import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Floor } from '@prisma/client';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';

@Injectable()
export class FloorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFloorDto): Promise<Floor> {
    return this.prisma.floor.create({ data });
  }

  async findMany(): Promise<Array<Floor>> {
    return this.prisma.floor.findMany();
  }

  async findOne(id: number): Promise<Floor> {
    return this.prisma.floor.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateFloorDto): Promise<Floor> {
    return this.prisma.floor.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Floor> {
    return this.prisma.floor.delete({ where: { id } });
  }
}
