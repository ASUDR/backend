import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateLodgerDto } from './dto/create-lodger.dto';
import { UpdateLodgerDto } from './dto/update-lodger.dto';
import { Lodger } from './entities/lodger.entity';

@Injectable()
export class LodgersService {
  constructor(
    @InjectRepository(Lodger)
    private readonly lodgersRepository: Repository<Lodger>,
  ) {}

  async create(data: CreateLodgerDto): Promise<Lodger> {
    const lodger = this.lodgersRepository.create(data);
    await this.lodgersRepository.save(lodger);
    return this.findOne({ id: lodger.id });
  }

  async findMany(filter?: FindConditions<Lodger>): Promise<Array<Lodger>> {
    return this.lodgersRepository.find(filter);
  }

  async findOne(filter: FindConditions<Lodger>): Promise<Lodger> {
    return this.lodgersRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateLodgerDto): Promise<Lodger> {
    const lodger = this.lodgersRepository.create({ id, ...data });
    await this.lodgersRepository.save(lodger);
    return this.findOne({ id: lodger.id });
  }

  async remove(id: number): Promise<Lodger> {
    const lodger = await this.lodgersRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.lodgersRepository.softRemove(lodger);
  }
}
