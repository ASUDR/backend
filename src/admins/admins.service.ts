/* eslint-disable @typescript-eslint/return-await */
import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, FindConditions, Repository } from 'typeorm';
import { Request } from 'express';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable({ scope: Scope.REQUEST })
export class AdminsService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
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
