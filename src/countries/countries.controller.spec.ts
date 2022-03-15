import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Country } from './entities/country.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    findOne: jest.fn((entity) => entity),
    // ...
  }),
);

describe('CatsController', () => {
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

  describe('findAll', () => {
    it('should return an array countries', async () => {
      const result = new Promise<Array<Country>>((resolve) => {
        resolve([new Country()]);
      });
      jest.spyOn(catsService, 'findMany').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(await result);
    });
  });
});
