import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultiesRepository: Repository<Faculty>,
  ) {}

  async create(data: CreateFacultyDto): Promise<Faculty> {
    const faculty = this.facultiesRepository.create(data);
    await this.facultiesRepository.save(faculty);
    return this.findOne({ id: faculty.id });
  }

  async findMany(filter?: FindConditions<Faculty>): Promise<Array<Faculty>> {
    return this.facultiesRepository.find(filter);
  }

  async findOne(filter: FindConditions<Faculty>): Promise<Faculty> {
    return this.facultiesRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateFacultyDto): Promise<Faculty> {
    const faculty = this.facultiesRepository.create({ id, ...data });
    await this.facultiesRepository.save(faculty);
    return this.findOne({ id: faculty.id });
  }

  async remove(id: number): Promise<Faculty> {
    const faculty = await this.facultiesRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.facultiesRepository.softRemove(faculty);
  }
}
