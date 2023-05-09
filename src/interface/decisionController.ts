import { Body, Controller, Post } from '@nestjs/common';
import { Decision } from '@prisma/client';
import { ApiResponse } from '@nestjs/swagger';

import { DecisionService } from '../core/services/decisionService';
import { CreateDecisionDto } from './dtos/createDecisionDto';

import { DecisionDto } from './dtos/decisionDto';

@Controller('/decisions')
export class DecisionController {
  constructor(private readonly decisionService: DecisionService) {}

  @Post('/')
  @ApiResponse({ status: 201, type: DecisionDto })
  create(@Body() createDecisionDto: CreateDecisionDto): Promise<Decision> {
    return this.decisionService.create({
      title: createDecisionDto.title,
      description: createDecisionDto.title,
    });
  }
}
