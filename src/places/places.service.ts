import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  async create(data: CreatePlaceDto): Promise<Place> {
    const place = this.placeRepository.create(data);
    await this.placeRepository.save(place);
    return this.findOne({ id: place.id });
  }

  async findMany(filter?: FindConditions<Place>): Promise<Array<Place>> {
    return this.placeRepository.find(filter);
  }

  async findOne(filter: FindConditions<Place>): Promise<Place> {
    return this.placeRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdatePlaceDto): Promise<Place> {
    const place = this.placeRepository.create({ id, ...data });
    await this.placeRepository.save(place);
    return this.findOne({ id: place.id });
  }

  async remove(id: number): Promise<Place> {
    const place = await this.placeRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.placeRepository.softRemove(place);
  }
}
