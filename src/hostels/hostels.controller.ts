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
  async create(@Body() createHostelDto: CreateHostelDto) {
    return this.hostelsService.create(createHostelDto);
  }

  @Get()
  async findAll() {
    return this.hostelsService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hostelsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHostelDto: UpdateHostelDto,
  ) {
    return this.hostelsService.update(id, updateHostelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.hostelsService.remove(id);
  }
}
