import { Injectable } from '@nestjs/common';
import { Hostel } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HostelsService {
  constructor(private readonly prisma: PrismaService) {}

  public async findMany(): Promise<Array<Hostel>> {
    return this.prisma.hostel.findMany();
  }
}
