import { Test, TestingModule } from '@nestjs/testing';
import { HealthentityService } from './healthentity.service';

describe('HealthentityService', () => {
  let service: HealthentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthentityService],
    }).compile();

    service = module.get<HealthentityService>(HealthentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
