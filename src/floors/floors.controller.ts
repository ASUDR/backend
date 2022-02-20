import { Controller } from '@nestjs/common';
import { FloorsService } from './floors.service';

@Controller('floors')
export class FloorsController {
  constructor(private readonly floorsService: FloorsService) {}
}
