import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCountryDto): Promise<Country> {
    return this.prisma.country.create({ data });
  }

  async findMany(): Promise<Array<Country>> {
    return this.prisma.country.findMany();
  }

  async findOne(id: string): Promise<Country> {
    return this.prisma.country.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateCountryDto): Promise<Country> {
    return this.prisma.country.update({ data, where: { id } });
  }

  async remove(id: string): Promise<Country> {
    return this.prisma.country.delete({ where: { id } });
  }
}
