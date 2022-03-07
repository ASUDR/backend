import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
