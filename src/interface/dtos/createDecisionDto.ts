import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseDto } from './baseDto';

export class CreateDecisionDto extends BaseDto<CreateDecisionDto> {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  decisionGroupId: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description: string;
}
