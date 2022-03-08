import { CommonEntity } from 'src/app/entities/common.entity';
import { Dormitory } from 'src/dormitories/entities/dormitory.entity';
import { Room } from 'src/rooms/entities/room.entity';
import {
  Entity, Column, ManyToOne, OneToMany,
} from 'typeorm';

@Entity()
export class Floor extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @ManyToOne(() => Dormitory, (dorm) => dorm.floors)
    hostel: Dormitory;

  @OneToMany(() => Room, (room) => room.floor)
    rooms: Room[];
}
