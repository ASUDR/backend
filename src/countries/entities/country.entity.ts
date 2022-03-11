import { ApiProperty } from '@nestjs/swagger';
import { CommonEntity } from 'src/app/entities/common.entity';
import { Lodger } from 'src/lodgers/entities/lodger.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Country extends CommonEntity {
  @ApiProperty({ maxLength: 64 })
  @Column('varchar', { length: 64, unique: true })
  name: string;

  @ApiProperty({ type: () => [Lodger] })
  @OneToMany(() => Lodger, (lodger) => lodger.dormitory)
  lodgers: Array<Lodger>;
}
