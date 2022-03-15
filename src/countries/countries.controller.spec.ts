import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'src/utils';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Country } from './entities/country.entity';

describe('CountriesController', () => {
  let catsController: CountriesController;
  let catsService: CountriesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [
        CountriesService,
        {
          provide: getRepositoryToken(Country),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    catsService = moduleRef.get<CountriesService>(CountriesService);
    catsController = moduleRef.get<CountriesController>(CountriesController);
  });

  describe('findMany', () => {
    it('should return an array countries', async () => {
      const result = new Promise<Array<Country>>((resolve) => {
        resolve([new Country()]);
      });
      jest.spyOn(catsService, 'findMany').mockImplementation(() => result);

      expect(await catsController.findMany()).toBe(await result);
    });
  });
});
