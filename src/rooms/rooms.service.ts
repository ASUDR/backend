import { Injectable } from '@nestjs/common';
import { Room } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRoomDto): Promise<Room> {
    return this.prisma.room.create({ data });
  }

  async findMany(): Promise<Array<Room>> {
    return this.prisma.room.findMany();
  }

  async findOne(id: string): Promise<Room> {
    return this.prisma.room.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateRoomDto): Promise<Room> {
    return this.prisma.room.update({ data, where: { id } });
  }

  async remove(id: string): Promise<Room> {
    return this.prisma.room.delete({ where: { id } });
  }
}
