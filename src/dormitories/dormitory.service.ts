import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateDormitoryDto } from './dto/create-dormitory.dto';
import { UpdateDormitoryDto } from './dto/update-dormitory.dto';
import { Dormitory } from './entities/dormitory.entity';

@Injectable()
export class DormitoriesService {
  constructor(
    @InjectRepository(Dormitory)
    private readonly dormitoriesRepository: Repository<Dormitory>,
  ) {}

  async create(data: CreateDormitoryDto): Promise<Dormitory> {
    const dormitory = this.dormitoriesRepository.create(data);
    await this.dormitoriesRepository.save(dormitory);
    return this.findOne({ id: dormitory.id });
  }

  async findMany(filter?: FindConditions<Dormitory>): Promise<Array<Dormitory>> {
    return this.dormitoriesRepository.find(filter);
  }

  async findOne(filter: FindConditions<Dormitory>): Promise<Dormitory> {
    return this.dormitoriesRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateDormitoryDto): Promise<Dormitory> {
    const dormitory = this.dormitoriesRepository.create({ id, ...data });
    await this.dormitoriesRepository.save(dormitory);
    return this.findOne({ id });
  }

  async remove(id: number): Promise<Dormitory> {
    const dormitory = await this.dormitoriesRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.dormitoriesRepository.softRemove(dormitory);
  }
}
