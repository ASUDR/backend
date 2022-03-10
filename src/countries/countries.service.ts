import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countriesRepository: Repository<Country>,
  ) { }

  async create(data: CreateCountryDto): Promise<Country> {
    const country = this.countriesRepository.create(data);
    await this.countriesRepository.save(country);
    return this.findOne({ id: country.id });
  }

  async findMany(filter?: FindConditions<Country>): Promise<Array<Country>> {
    return this.countriesRepository.find(filter);
  }

  async findOne(filter: FindConditions<Country>): Promise<Country> {
    return this.countriesRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateCountryDto): Promise<Country> {
    const country = this.countriesRepository.create({ id, ...data });
    await this.countriesRepository.save(country);
    return this.findOne({ id: country.id });
  }

  async remove(id: number): Promise<Country> {
    const country = await this.countriesRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.countriesRepository.softRemove(country);
  }
}
