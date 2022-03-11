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
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Controller('countries')
@UseGuards(JwtAuthGuard)
@ApiTags('countries')
@ApiBearerAuth()
@ApiResponse({
  status: HttpStatus.UNAUTHORIZED,
  description: 'Unauthorized',
})
@ApiResponse({
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Country })
  async create(@Body() dto: CreateCountryDto): Promise<Country> {
    return this.countriesService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Country] })
  async findAll(): Promise<Array<Country>> {
    return this.countriesService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Country })
  async findOne(@Param('id') id: string): Promise<Country> {
    return this.countriesService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Country })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCountryDto,
  ): Promise<Country> {
    return this.countriesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Country })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Country> {
    return this.countriesService.remove(+id);
  }
}
