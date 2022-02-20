import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateGroupDto): Promise<Group> {
    return this.prisma.group.create({ data });
  }

  async findMany(): Promise<Array<Group>> {
    return this.prisma.group.findMany();
  }

  async findOne(id: string): Promise<Group> {
    return this.prisma.group.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateGroupDto): Promise<Group> {
    return this.prisma.group.update({ data, where: { id } });
  }

  async remove(id: string): Promise<Group> {
    return this.prisma.group.delete({ where: { id } });
  }
}
