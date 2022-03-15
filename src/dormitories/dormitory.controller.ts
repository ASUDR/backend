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
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DormitoriesService } from './dormitory.service';
import { CreateDormitoryDto } from './dto/create-dormitory.dto';
import { UpdateDormitoryDto } from './dto/update-dormitory.dto';
import { Dormitory } from './entities/dormitory.entity';

@Controller('hostels')
@UseGuards(JwtAuthGuard)
@ApiTags('dormitories')
@ApiBearerAuth()
@ApiResponse({
  status: HttpStatus.UNAUTHORIZED,
  description: 'Unauthorized',
})
@ApiResponse({
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class DormitoriesController {
  constructor(private readonly dormitoriesService: DormitoriesService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Dormitory })
  async create(@Body() dto: CreateDormitoryDto): Promise<Dormitory> {
    return this.dormitoriesService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Dormitory] })
  async findMany(): Promise<Array<Dormitory>> {
    return this.dormitoriesService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Dormitory })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Dormitory> {
    return this.dormitoriesService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Dormitory })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateDormitoryDto,
  ): Promise<Dormitory> {
    return this.dormitoriesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Dormitory })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Dormitory> {
    return this.dormitoriesService.remove(+id);
  }
}
