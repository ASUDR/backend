import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { Dormitory } from './entities/dormitory.entity';

@Injectable()
export class HostelsService {
  constructor(
    @InjectRepository(Dormitory)
    private readonly hostelsRepository: Repository<Dormitory>,
  ) {}

  async create(data: CreateHostelDto): Promise<Dormitory> {
    const hostel = this.hostelsRepository.create(data);
    await this.hostelsRepository.save(hostel);
    return this.findOne({ id: hostel.id });
  }

  async findMany(filter?: FindConditions<Dormitory>): Promise<Array<Dormitory>> {
    return this.hostelsRepository.find(filter);
  }

  async findOne(filter: FindConditions<Dormitory>): Promise<Dormitory> {
    return this.hostelsRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateHostelDto): Promise<Dormitory> {
    const hostel = this.hostelsRepository.create({ id, ...data });
    await this.hostelsRepository.save(hostel);
    return this.findOne({ id });
  }

  async remove(id: number): Promise<Dormitory> {
    const hostel = await this.hostelsRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.hostelsRepository.softRemove(hostel);
  }
}
