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
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsService } from './rooms.service';

@Controller('rooms')
// @UseGuards(JwtAuthGuard)
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async create(@Body() dto: CreateRoomDto) {
    return this.roomsService.create(dto);
  }

  @Get()
  async findAll() {
    return this.roomsService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roomsService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateRoomDto) {
    return this.roomsService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.roomsService.remove(+id);
  }
}
