import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNumber, IsPositive } from 'class-validator';

export class Answer {
  @IsNumber()
  @IsPositive()
  @ApiProperty({ default: 1 })
  score: number;
}

export class CreateRiskProfileDto {
  @ApiProperty({ type: () => Answer, default: [] })
  @IsArray()
  @ArrayMinSize(1)
  answers: Answer[];
}
