import { Module } from '@nestjs/common';
import { RiskProfileModule } from './risk-profile/risk-profile.module';

@Module({
  imports: [RiskProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
