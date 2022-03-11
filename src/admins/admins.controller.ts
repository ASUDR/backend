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
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Controller('admins')
@UseGuards(JwtAuthGuard)
@ApiTags('admins')
@ApiBearerAuth()
@ApiResponse({
  status: HttpStatus.UNAUTHORIZED,
  description: 'Unauthorized',
})
@ApiResponse({
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Admin })
  async create(@Body() dto: CreateAdminDto): Promise<Admin> {
    return this.adminsService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Admin] })
  async findAll(): Promise<Array<Admin>> {
    return this.adminsService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Admin })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Admin> {
    return this.adminsService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Admin })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateAdminDto,
  ): Promise<Admin> {
    return this.adminsService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Admin })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Admin> {
    return this.adminsService.remove(+id);
  }
}
