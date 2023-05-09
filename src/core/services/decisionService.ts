import { Injectable } from '@nestjs/common';
import { Prisma, Decision } from '@prisma/client';
import { PrismaClientService } from './prismaClientService';

@Injectable()
export class DecisionService {
  constructor(private readonly prismaClientService: PrismaClientService) {}
  async create(
    decisionCreateInput: Prisma.DecisionCreateInput,
  ): Promise<Decision> {
    return this.prismaClientService.prismaClient.decision.create({
      data: decisionCreateInput,
    });
  }
}
