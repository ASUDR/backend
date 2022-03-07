import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Faculty } from '@prisma/client';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFacultyDto): Promise<Faculty> {
    return this.prisma.faculty.create({ data });
  }

  async findMany(): Promise<Array<Faculty>> {
    return this.prisma.faculty.findMany();
  }

  async findOne(id: string): Promise<Faculty> {
    return this.prisma.faculty.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateFacultyDto): Promise<Faculty> {
    return this.prisma.faculty.update({ data, where: { id } });
  }

  async remove(id: string): Promise<Faculty> {
    return this.prisma.faculty.delete({ where: { id } });
  }
}
