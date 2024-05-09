import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';

import { RiskProfileService } from './risk-profile.service';
import { CreateRiskProfileDto } from './dto/create-risk-profile.dto';

@ApiTags('Risk-Profile')
@Controller('risk-profile')
export class RiskProfileController {
  constructor(private readonly riskProfileService: RiskProfileService) {}

  @Post()
  create(@Body() createRiskProfileDto: CreateRiskProfileDto) {
    return this.riskProfileService.create(createRiskProfileDto);
  }
}
