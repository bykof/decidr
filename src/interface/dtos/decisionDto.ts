import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { BaseDto } from './baseDto';

export class DecisionDto extends BaseDto<DecisionDto> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  decisionGroupId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
