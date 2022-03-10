import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DormitoriesService } from './dormitory.service';
import { CreateDormitoryDto } from './dto/create-dormitory.dto';
import { UpdateDormitoryDto } from './dto/update-dormitory.dto';

@ApiTags('dormitories')
@ApiBearerAuth()
@Controller('dormitories')
@UseGuards(JwtAuthGuard)
export class DormitoriesController {
  constructor(private readonly dormitoriesService: DormitoriesService) {}

  @Post()
  async create(@Body() dto: CreateDormitoryDto) {
    return this.dormitoriesService.create(dto);
  }

  @Get()
  async findAll() {
    return this.dormitoriesService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.dormitoriesService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDormitoryDto) {
    return this.dormitoriesService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.dormitoriesService.remove(+id);
  }
}
