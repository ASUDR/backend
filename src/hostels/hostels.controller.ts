import { Controller, Get } from '@nestjs/common';
import { Hostel } from '@prisma/client';
import { HostelsService } from './hostels.service';

@Controller('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Get()
  public async findMany(): Promise<Array<Hostel>> {
    return this.hostelsService.findMany();
  }
}
