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
import { CreateLodgerDto } from './dto/create-lodger.dto';
import { UpdateLodgerDto } from './dto/update-lodger.dto';
import { LodgersService } from './lodgers.service';

@Controller('lodgers')
@UseGuards(JwtAuthGuard)
export class LodgersController {
  constructor(private readonly lodgersService: LodgersService) {}

  @Post()
  async create(@Body() dto: CreateLodgerDto) {
    return this.lodgersService.create(dto);
  }

  @Get()
  async findAll() {
    return this.lodgersService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.lodgersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateLodgerDto) {
    return this.lodgersService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.lodgersService.remove(id);
  }
}
