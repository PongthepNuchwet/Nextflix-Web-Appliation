import { Test, TestingModule } from '@nestjs/testing';
import { MoviedbController } from './moviedb.controller';

describe('MoviedbController', () => {
  let controller: MoviedbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviedbController],
    }).compile();

    controller = module.get<MoviedbController>(MoviedbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
