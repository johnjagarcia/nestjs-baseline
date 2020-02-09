import { Test, TestingModule } from '@nestjs/testing';
import { HealthentityController } from './healthentity.controller';

describe('Healthentity Controller', () => {
  let controller: HealthentityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthentityController],
    }).compile();

    controller = module.get<HealthentityController>(HealthentityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
