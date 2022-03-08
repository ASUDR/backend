import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { Floor } from './entities/floor.entity';

@Injectable()
export class FloorsService {
  constructor(
    @InjectRepository(Floor)
    private readonly floorsRepository: Repository<Floor>,
  ) {}

  async create(data: CreateFloorDto): Promise<Floor> {
    const floor = this.floorsRepository.create(data);
    await this.floorsRepository.save(floor);
    return this.findOne({ id: floor.id });
  }

  async findMany(filter?: FindConditions<Floor>): Promise<Array<Floor>> {
    return this.floorsRepository.find(filter);
  }

  async findOne(filter: FindConditions<Floor>): Promise<Floor> {
    return this.floorsRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateFloorDto): Promise<Floor> {
    const floor = this.floorsRepository.create({ id, ...data });
    await this.floorsRepository.save(floor);
    return this.findOne({ id });
  }

  async remove(id: number): Promise<Floor> {
    const floor = await this.floorsRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.floorsRepository.softRemove(floor);
  }
}
