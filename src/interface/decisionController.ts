import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { DecisionService } from '../core/services/decisionService';
import { CreateDecisionDto } from './dtos/createDecisionDto';

import { DecisionDto } from './dtos/decisionDto';
import { Prisma } from '@prisma/client';

@Controller('/decisions')
export class DecisionController {
  constructor(private readonly decisionService: DecisionService) {}

  @Post('/')
  @ApiResponse({ status: 201, type: DecisionDto })
  async create(
    @Body() createDecisionDto: CreateDecisionDto,
  ): Promise<DecisionDto> {
    try {
      const decision = await this.decisionService.create({
        title: createDecisionDto.title,
        description: createDecisionDto.description,
        decisionGroup: { connect: { id: createDecisionDto.decisionGroupId } },
      });

      return new DecisionDto({
        title: decision.title,
        description: decision.description,
        decisionGroupId: decision.decisionGroupId,
        id: decision.id,
        createdAt: decision.createdAt,
        updatedAt: decision.updatedAt,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new HttpException(
              { message: 'decision group not found' },
              404,
            );
        }
      }
      throw error;
    }
  }
}
