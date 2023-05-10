import { Injectable } from '@nestjs/common';
import { PrismaClientService } from './prismaClientService';
import { Prisma, DecisionGroup } from '@prisma/client';

@Injectable()
export default class DecisionGroupService {
  constructor(private readonly prismaClientService: PrismaClientService) {}
  async create(
    createDecisionGroupInput: Prisma.DecisionGroupCreateInput,
  ): Promise<DecisionGroup> {
    return this.prismaClientService.prismaClient.decisionGroup.create({
      data: createDecisionGroupInput,
    });
  }
}
