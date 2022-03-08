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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateLodgerDto } from './dto/create-lodger.dto';
import { UpdateLodgerDto } from './dto/update-lodger.dto';
import { Lodger } from './entities/lodger.entity';
import { LodgersService } from './lodgers.service';

@ApiTags('lodgers')
@Controller('lodgers')
// @UseGuards(JwtAuthGuard)
export class LodgersController {
  constructor(private readonly lodgersService: LodgersService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Lodger })
  async create(@Body() dto: CreateLodgerDto): Promise<Lodger> {
    return this.lodgersService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Lodger] })
  async findAll() {
    return this.lodgersService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Lodger })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string) {
    return this.lodgersService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Lodger })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(@Param('id') id: string, @Body() dto: UpdateLodgerDto) {
    return this.lodgersService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Lodger })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string) {
    return this.lodgersService.remove(+id);
  }
}
