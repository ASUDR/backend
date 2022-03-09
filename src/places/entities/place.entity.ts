import { ApiProperty } from '@nestjs/swagger';
import { CommonEntity } from 'src/app/entities/common.entity';
import { Lodger } from 'src/lodgers/entities/lodger.entity';
import { Room } from 'src/rooms/entities/room.entity';
import {
  Entity, Column, ManyToOne, JoinColumn, OneToMany,
} from 'typeorm';

@Entity()
export class Place extends CommonEntity {
  @ApiProperty()
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @ApiProperty({ type: () => Room })
  @ManyToOne(() => Room, (room) => room.places, {
    cascade: true, eager: true,
  })
  @JoinColumn({ name: 'roomId' })
    room: Room;

  @ApiProperty()
  @Column({ nullable: false })
    roomId: number;

  @ApiProperty({ type: () => [Lodger] })
  @OneToMany(() => Lodger, (lodger) => lodger.dormitory)
    lodgers: Array<Lodger>;
}
