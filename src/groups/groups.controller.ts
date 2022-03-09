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
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { GroupsService } from './groups.service';

@ApiTags('groups')
@Controller('groups')
// @UseGuards(JwtAuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: Group })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  async create(@Body() dto: CreateGroupDto): Promise<Group> {
    return this.groupsService.create(dto);
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Group] })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  async findAll(): Promise<Array<Group>> {
    return this.groupsService.findMany();
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Group })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async findOne(@Param('id') id: string): Promise<Group> {
    return this.groupsService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Group })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async update(@Param('id') id: string, @Body() dto: UpdateGroupDto): Promise<Group> {
    return this.groupsService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Group })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiResponse({ status: HttpStatus.NOT_FOUND })
  async remove(@Param('id') id: string): Promise<Group> {
    return this.groupsService.remove(+id);
  }
}
