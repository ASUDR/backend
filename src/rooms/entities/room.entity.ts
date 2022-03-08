import { CommonEntity } from 'src/app/entities/common.entity';
import { Floor } from 'src/floors/entities/floor.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Room extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @ManyToOne(() => Floor, (floor) => floor.rooms)
    floor: Floor;
}
