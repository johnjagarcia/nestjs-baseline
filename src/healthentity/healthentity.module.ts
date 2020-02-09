import { Module } from '@nestjs/common';
import { HealthentityController } from './healthentity.controller';
import { HealthentityService } from './healthentity.service';

@Module({
  controllers: [HealthentityController],
  providers: [HealthentityService]
})
export class HealthentityModule {}
