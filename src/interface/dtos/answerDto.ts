import { BaseDto } from './baseDto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { AnswerType } from '../../core/domain/answerType';

export default class AnswerDto extends BaseDto<AnswerDto> {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  decisionId: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, enum: AnswerType })
  @IsEnum(AnswerType)
  @IsNotEmpty()
  answerType: AnswerType;

  @ApiProperty({ required: true })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty({ required: true })
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
