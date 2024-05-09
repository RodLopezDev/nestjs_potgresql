import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RiskProfile } from './entities/risk-profile.entity';
import { CreateRiskProfileDto } from './dto/create-risk-profile.dto';

@Injectable()
export class RiskProfileService {
  constructor(
    @InjectRepository(RiskProfile)
    private readonly repository: Repository<RiskProfile>,
  ) {}

  async create(dto: CreateRiskProfileDto) {
    const value = await this.repository.save({
      firstName: 'pruebas',
      lastName: '123213',
    });
    console.log(value, 'value');
    return 'This action adds a new riskProfile';
  }
}
