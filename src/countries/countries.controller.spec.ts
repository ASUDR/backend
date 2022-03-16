import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'src/utils';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Country } from './entities/country.entity';

describe('CountriesController', () => {
  let countriesController: CountriesController;
  let countriesService: CountriesService;

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

    countriesService = moduleRef.get<CountriesService>(CountriesService);
    countriesController =
      moduleRef.get<CountriesController>(CountriesController);
  });

  describe('findMany', () => {
    it('should return an array countries', async () => {
      const result = new Promise<Array<Country>>((resolve) => {
        resolve([new Country()]);
      });

      jest.spyOn(countriesService, 'findMany').mockImplementation(() => result);
      expect(await countriesController.findMany()).toBe(await result);
    });

    it('should be called once', async () => {
      jest.spyOn(countriesService, 'findMany');
      await countriesController.findMany();
      expect(jest.spyOn(countriesService, 'findMany')).toBeCalledTimes(1);
    });
  });
});
