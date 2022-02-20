import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';

@Controller('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Post()
  async create(@Body() dto: CreateHostelDto) {
    return this.hostelsService.create(dto);
  }

  @Get()
  async findAll() {
    return this.hostelsService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.hostelsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateHostelDto) {
    return this.hostelsService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.hostelsService.remove(+id);
  }
}
