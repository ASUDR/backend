import { Injectable } from '@nestjs/common';
import { Place } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceDto } from './dto/craete-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePlaceDto): Promise<Place> {
    return this.prisma.place.create({ data });
  }

  async findMany(): Promise<Array<Place>> {
    return this.prisma.place.findMany();
  }

  async findOne(id: string): Promise<Place> {
    return this.prisma.place.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdatePlaceDto): Promise<Place> {
    return this.prisma.place.update({ data, where: { id } });
  }

  async remove(id: string): Promise<Place> {
    return this.prisma.place.delete({ where: { id } });
  }
}
