import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { FacultiesService } from './faculties.service';

@Controller('faculties')
@UseGuards(JwtAuthGuard)
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post()
  async create(@Body() dto: CreateFacultyDto) {
    return this.facultiesService.create(dto);
  }

  @Get()
  async findAll() {
    return this.facultiesService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.facultiesService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateFacultyDto) {
    return this.facultiesService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.facultiesService.remove(+id);
  }
}
