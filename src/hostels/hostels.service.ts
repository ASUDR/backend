import { Injectable } from '@nestjs/common';
import { Hostel, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HostelsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.HostelCreateInput): Promise<Hostel> {
    return this.prisma.hostel.create({ data });
  }

  async findMany() {
    return this.prisma.hostel.findMany();
  }

  async findOne(id: string) {
    return `This action returns a #${id} hostel`;
  }

  async update(id: string, data: Prisma.HostelUpdateInput) {
    return this.prisma.hostel.update({ data, where: { id } });
  }

  async remove(id: string) {
    return this.prisma.hostel.delete({ where: { id } });
  }
}
