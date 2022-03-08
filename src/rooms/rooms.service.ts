import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  async create(data: CreateRoomDto): Promise<Room> {
    const room = this.roomRepository.create(data);
    await this.roomRepository.save(room);
    return this.findOne({ id: room.id });
  }

  async findMany(filter?: FindConditions<Room>): Promise<Array<Room>> {
    return this.roomRepository.find(filter);
  }

  async findOne(filter: FindConditions<Room>): Promise<Room> {
    return this.roomRepository.findOneOrFail(filter);
  }

  async update(id: number, data: UpdateRoomDto): Promise<Room> {
    const room = this.roomRepository.create({ id, ...data });
    await this.roomRepository.save(room);
    return this.findOne({ id });
  }

  async remove(id: number): Promise<Room> {
    const room = await this.roomRepository.findOneOrFail(
      { id },
      { loadEagerRelations: false },
    );
    return this.roomRepository.softRemove(room);
  }
}
