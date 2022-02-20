import { Injectable } from '@nestjs/common';
import { Hostel } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';

@Injectable()
export class HostelsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateHostelDto): Promise<Hostel> {
    return this.prisma.hostel.create({ data });
  }

  async findMany(): Promise<Array<Hostel>> {
    return this.prisma.hostel.findMany();
  }

  async findOne(id: number): Promise<Hostel> {
    return this.prisma.hostel.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateHostelDto): Promise<Hostel> {
    return this.prisma.hostel.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Hostel> {
    return this.prisma.hostel.delete({ where: { id } });
  }
}
