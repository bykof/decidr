import { Injectable } from '@nestjs/common';
import { Prisma, Answer } from '@prisma/client';
import { PrismaClientService } from './prismaClientService';

@Injectable()
export default class AnswerService {
  constructor(private readonly prismaClientService: PrismaClientService) {}
  async create(answerCreateInput: Prisma.AnswerCreateInput): Promise<Answer> {
    return this.prismaClientService.prismaClient.answer.create({
      data: answerCreateInput,
    });
  }
}
