import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HostelsService } from './dormitory.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { Dormitory } from './entities/dormitory.entity';

@ApiTags('dormitories')
@Controller('hostels')
// @UseGuards(JwtAuthGuard)
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Dormitory })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  async create(@Body() dto: CreateHostelDto): Promise<Dormitory> {
    return this.hostelsService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Dormitory] })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  async findAll(): Promise<Array<Dormitory>> {
    return this.hostelsService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Dormitory })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Dormitory> {
    return this.hostelsService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Dormitory })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(@Param('id') id: string, @Body() dto: UpdateHostelDto): Promise<Dormitory> {
    return this.hostelsService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Dormitory })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Dormitory> {
    return this.hostelsService.remove(+id);
  }
}
