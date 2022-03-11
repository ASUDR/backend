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
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { GroupsService } from './groups.service';

@Controller('groups')
@UseGuards(JwtAuthGuard)
@ApiTags('groups')
@ApiBearerAuth()
@ApiResponse({
  status: HttpStatus.UNAUTHORIZED,
  description: 'Unauthorized',
})
@ApiResponse({
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Internal Server Error',
})
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Group })
  async create(@Body() dto: CreateGroupDto): Promise<Group> {
    return this.groupsService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Group] })
  async findAll(): Promise<Array<Group>> {
    return this.groupsService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Group })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Group> {
    return this.groupsService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Group })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateGroupDto,
  ): Promise<Group> {
    return this.groupsService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Group })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Group> {
    return this.groupsService.remove(+id);
  }
}
