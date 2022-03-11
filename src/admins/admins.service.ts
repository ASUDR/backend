/* eslint-disable @typescript-eslint/return-await */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { FacultiesService } from 'src/faculties/faculties.service';
import { FindConditions, Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminsRepository: Repository<Admin>,
    private readonly facultiesService: FacultiesService,
  ) {}

  async create(dto: CreateAdminDto): Promise<Admin> {
    const { facultiesIds, ...data } = dto;
    const faculties: Array<Faculty> = await Promise.all(
      facultiesIds.map(async (id) => this.facultiesService.findOne({ id })),
    );
    const obj = { ...data, faculties };
    console.log('obj', obj);
    const admin = this.adminsRepository.create(data);
    await this.adminsRepository.save(admin);
    console.log('after save');
    admin.faculties = faculties;
    await this.adminsRepository.save(admin);
    console.log('after save', admin);
    return this.findOne({ id: admin.id });
  }

  async findMany(filter?: FindConditions<Admin>): Promise<Array<Admin>> {
    return this.adminsRepository.find(filter);
  }

  async findOne(filter: FindConditions<Admin>): Promise<Admin> {
    return this.adminsRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateAdminDto): Promise<Admin> {
    const admin = this.adminsRepository.create({ id, ...data });
    await this.adminsRepository.save(admin);
    return this.findOne({ id: admin.id });
  }

  async remove(id: number): Promise<Admin> {
    const admin = await this.adminsRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.adminsRepository.softRemove(admin);
  }
}
