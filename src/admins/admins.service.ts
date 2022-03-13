/* eslint-disable @typescript-eslint/return-await */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, FindConditions, Repository } from 'typeorm';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminsRepository: Repository<Admin>,
  ) {}

  async create(dto: DeepPartial<Admin>): Promise<Admin> {
    const admin = this.adminsRepository.create(dto);
    await this.adminsRepository.save(admin);
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
