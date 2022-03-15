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
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';
import { PlacesService } from './places.service';

@Controller('places')
@UseGuards(JwtAuthGuard)
@ApiTags('places')
@ApiBearerAuth()
@ApiResponse({
  status: HttpStatus.UNAUTHORIZED,
  description: 'Unauthorized',
})
@ApiResponse({
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Place })
  async create(@Body() dto: CreatePlaceDto): Promise<Place> {
    return this.placesService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Place] })
  async findMany(): Promise<Array<Place>> {
    return this.placesService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Place })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Place> {
    return this.placesService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Place })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdatePlaceDto,
  ): Promise<Place> {
    return this.placesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Place })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Place> {
    return this.placesService.remove(+id);
  }
}
