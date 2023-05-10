import { Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { DecisionGroupDto } from './dtos/decisionGroupDto';
import DecisionGroupService from '../core/services/decisionGroupService';

@Controller('/decision-groups')
export default class DecisionGroupController {
  constructor(private readonly decisionGroupService: DecisionGroupService) {}
  @Post('/')
  @ApiResponse({ type: DecisionGroupDto })
  async create(): Promise<DecisionGroupDto> {
    return new DecisionGroupDto(await this.decisionGroupService.create({}));
  }
}
