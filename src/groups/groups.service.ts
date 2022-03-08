import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupsRepository: Repository<Group>,
  ) {}

  async create(data: CreateGroupDto): Promise<Group> {
    const group = this.groupsRepository.create(data);
    await this.groupsRepository.save(group);
    return this.findOne({ id: group.id });
  }

  async findMany(filter?: FindConditions<Group>): Promise<Array<Group>> {
    return this.groupsRepository.find(filter);
  }

  async findOne(filter: FindConditions<Group>): Promise<Group> {
    return this.groupsRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateGroupDto): Promise<Group> {
    const group = this.groupsRepository.create({ id, ...data });
    await this.groupsRepository.save(group);
    return this.findOne({ id: group.id });
  }

  async remove(id: number): Promise<Group> {
    const group = await this.groupsRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.groupsRepository.softRemove(group);
  }
}
