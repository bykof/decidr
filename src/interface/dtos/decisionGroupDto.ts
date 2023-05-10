import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { DecisionDto } from './decisionDto';
import { BaseDto } from './baseDto';

export class DecisionGroupDto extends BaseDto<DecisionGroupDto> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ isArray: true, type: DecisionDto })
  @IsArray()
  decisions: DecisionGroupDto[];

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
