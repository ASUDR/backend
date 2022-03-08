import { CommonEntity } from 'src/app/entities/common.entity';
import { Floor } from 'src/floors/entities/floor.entity';
import {
  Entity, Column, ManyToOne, JoinColumn,
} from 'typeorm';

@Entity()
export class Room extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @ManyToOne(() => Floor, (floor) => floor.rooms, {
    cascade: true, eager: true,
  })
  @JoinColumn({ name: 'floorId' })
    floor: Floor;

  @Column({ nullable: false })
    floorId: number;
}
