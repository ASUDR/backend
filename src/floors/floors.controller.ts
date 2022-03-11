import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { Floor } from './entities/floor.entity';
import { FloorsService } from './floors.service';

@ApiTags('floors')
@ApiBearerAuth()
@Controller('floors')
@UseGuards(JwtAuthGuard)
export class FloorsController {
  constructor(private readonly floorsService: FloorsService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Floor })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  async create(@Body() dto: CreateFloorDto): Promise<Floor> {
    return this.floorsService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Floor] })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  async findAll(): Promise<Array<Floor>> {
    return this.floorsService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Floor })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Floor> {
    return this.floorsService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Floor })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateFloorDto,
  ): Promise<Floor> {
    return this.floorsService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Floor })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Floor> {
    return this.floorsService.remove(+id);
  }
}
