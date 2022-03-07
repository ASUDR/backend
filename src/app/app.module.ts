import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'ormconfig';
import { AppController } from './app.controller';
import { HostelsModule } from '../hostels/hostels.module';
import { FloorsModule } from '../floors/floors.module';
import { RoomsModule } from '../rooms/rooms.module';
import { FacultiesModule } from '../faculties/faculties.module';
import { GroupsModule } from '../groups/groups.module';
import { CountriesModule } from '../countries/countries.module';
import { PlacesModule } from '../places/places.module';
import { LodgersModule } from '../lodgers/lodgers.module';
import { AdminsModule } from '../admins/admins.module';
import { AuthModule } from '../auth/auth.module';

console.log(config);

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    HostelsModule,
    // FloorsModule,
    // RoomsModule,
    // FacultiesModule,
    // GroupsModule,
    // CountriesModule,
    // PlacesModule,
    // LodgersModule,
    // AdminsModule,
    // AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
