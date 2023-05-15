import { Body, Controller, HttpException, Logger, Post } from '@nestjs/common';
import AnswerService from '../core/services/answerService';
import CreateAnswerDto from './dtos/createAnswerDto';
import AnswerDto from './dtos/answerDto';
import { AnswerType } from '../core/domain/answerType';
import { Prisma } from '@prisma/client';

@Controller('/answers')
export default class AnswerController {
  private readonly logger = new Logger(AnswerController.name);
  constructor(private readonly answerService: AnswerService) {}

  @Post('/')
  async create(@Body() createAnswerDto: CreateAnswerDto): Promise<AnswerDto> {
    try {
      const answer = await this.answerService.create({
        decision: {
          connect: { id: createAnswerDto.decisionId },
        },
        name: createAnswerDto.name,
        answerType: createAnswerDto.answerType,
      });

      return new AnswerDto({
        id: answer.id,
        answerType: answer.answerType as AnswerType,
        decisionId: answer.decisionId,
        name: answer.name,
        createdAt: answer.createdAt,
        updatedAt: answer.updatedAt,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new HttpException(
              { message: 'the answer was already posted' },
              409,
            );
          case 'P2025':
            throw new HttpException({ message: 'decision not found' }, 404);
        }
      }
      throw error;
    }
  }
}
