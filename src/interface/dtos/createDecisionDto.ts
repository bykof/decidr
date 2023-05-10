import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateDecisionDto {
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
