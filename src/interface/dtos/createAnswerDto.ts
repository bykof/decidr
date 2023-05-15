import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AnswerType } from '../../core/domain/answerType';

export default class CreateAnswerDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  decisionId: string;

  @ApiProperty({ required: true, enum: AnswerType })
  @IsNotEmpty()
  @IsEnum(AnswerType)
  answerType: AnswerType;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;
}
