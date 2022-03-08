import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { Hostel } from './entities/hostel.entity';

@Injectable()
export class HostelsService {
  constructor(
    @InjectRepository(Hostel)
    private readonly hostelsRepository: Repository<Hostel>,
  ) {}

  async create(data: CreateHostelDto): Promise<Hostel> {
    const hostel = this.hostelsRepository.create(data);
    await this.hostelsRepository.save(hostel);
    return this.findOne({ id: hostel.id });
  }

  async findMany(): Promise<Array<Hostel>> {
    return this.hostelsRepository.find();
  }

  async findOne(filter: FindConditions<Hostel>): Promise<Hostel> {
    return this.hostelsRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateHostelDto): Promise<Hostel> {
    const hostel = this.hostelsRepository.create({ ...data, id });
    console.log('hostel', hostel);
    await this.hostelsRepository.save(hostel);
    return this.findOne({ id });
  }

  async remove(id: number): Promise<Hostel> {
    const hostel = await this.hostelsRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );

    return this.hostelsRepository.softRemove(hostel);
  }
}
