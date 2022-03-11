import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CommonEntity } from 'src/app/entities/common.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Dormitory } from 'src/dormitories/entities/dormitory.entity';
import { Group } from 'src/groups/entities/group.entity';
import { Place } from 'src/places/entities/place.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Lodger extends CommonEntity {
  @ApiProperty()
  @Column('varchar', { length: 64, unique: true })
  login: string;

  @ApiProperty()
  @Column('varchar', { length: 128 })
  password: string;

  @ApiProperty()
  @Column('varchar', { length: 64 })
  lastName: string;

  @ApiProperty()
  @Column('varchar', { length: 64 })
  firstName: string;

  @ApiPropertyOptional()
  @Column('varchar', { length: 64, nullable: true })
  patronymic?: string;

  @ApiPropertyOptional()
  @Column('varchar', { length: 12, nullable: true })
  phone?: string;

  @ApiProperty()
  @Column()
  contractId: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  contractDate?: Date;

  @ManyToOne(() => Dormitory, (dorm) => dorm.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'dormitoryId' })
  dormitory: Dormitory;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  dormitoryId?: number;

  @ManyToOne(() => Place, (place) => place.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'placeId' })
  place: Place;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  placeId?: number;

  @ManyToOne(() => Group, (group) => group.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'groupId' })
  group: Place;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  groupId?: number;

  @ManyToOne(() => Country, (country) => country.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'countryId' })
  country: Place;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  countryId?: number;
}
