import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'ormconfig';
import { DormitoriesModule } from '../dormitories/dormitory.module';
import { FloorsModule } from '../floors/floors.module';
import { RoomsModule } from '../rooms/rooms.module';
import { FacultiesModule } from '../faculties/faculties.module';
import { GroupsModule } from '../groups/groups.module';
import { CountriesModule } from '../countries/countries.module';
import { PlacesModule } from '../places/places.module';
import { LodgersModule } from '../lodgers/lodgers.module';
import { AdminsModule } from '../admins/admins.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config as TypeOrmModuleOptions),
    AuthModule,
    AdminsModule,
    CountriesModule,
    DormitoriesModule,
    FacultiesModule,
    FloorsModule,
    GroupsModule,
    LodgersModule,
    PlacesModule,
    RoomsModule,
  ],
})
export class AppModule {}
