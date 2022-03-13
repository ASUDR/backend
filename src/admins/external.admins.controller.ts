import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminsService } from './admins.service';
import { ExternalCreateAdminDto } from './dto/external.create-admin.dto';
import { Admin } from './entities/admin.entity';

@Controller('external/admins')
@ApiTags('external/admins')
@ApiResponse({
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class ExternalAdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Admin })
  async create(@Body() dto: ExternalCreateAdminDto): Promise<Admin> {
    return this.adminsService.create(dto);
  }
}
