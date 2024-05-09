import { Module } from '@nestjs/common';
import { RiskProfileService } from './risk-profile.service';
import { RiskProfileController } from './risk-profile.controller';

@Module({
  controllers: [RiskProfileController],
  providers: [RiskProfileService],
})
export class RiskProfileModule {}
