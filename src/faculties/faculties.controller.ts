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
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';
import { FacultiesService } from './faculties.service';

@Controller('faculties')
@UseGuards(JwtAuthGuard)
@ApiTags('faculties')
@ApiBearerAuth()
@ApiResponse({
  status: HttpStatus.UNAUTHORIZED,
  description: 'Unauthorized',
})
@ApiResponse({
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Faculty })
  async create(@Body() dto: CreateFacultyDto): Promise<Faculty> {
    return this.facultiesService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Faculty] })
  async findAll(): Promise<Array<Faculty>> {
    return this.facultiesService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Faculty })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Faculty> {
    return this.facultiesService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Faculty })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateFacultyDto,
  ): Promise<Faculty> {
    return this.facultiesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Faculty })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Faculty> {
    return this.facultiesService.remove(+id);
  }
}
