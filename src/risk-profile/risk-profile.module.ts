import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RiskProfileService } from './risk-profile.service';
import { RiskProfile } from './entities/risk-profile.entity';
import { RiskProfileController } from './risk-profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RiskProfile])],
  controllers: [RiskProfileController],
  providers: [RiskProfileService],
  exports: [RiskProfileService],
})
export class RiskProfileModule {}
