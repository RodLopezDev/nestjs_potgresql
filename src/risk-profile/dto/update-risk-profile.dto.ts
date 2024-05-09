import { PartialType } from '@nestjs/swagger';
import { CreateRiskProfileDto } from './create-risk-profile.dto';

export class UpdateRiskProfileDto extends PartialType(CreateRiskProfileDto) {}
