import { Module } from '@nestjs/common';
import { DecisionController } from './interface/decisionController';
import { DecisionService } from './core/services/decisionService';
import { PrismaClientService } from './core/services/prismaClientService';
import DecisionGroupService from './core/services/decisionGroupService';
import DecisionGroupController from './interface/decisionGroupController';

@Module({
  imports: [],
  controllers: [DecisionGroupController, DecisionController],
  providers: [PrismaClientService, DecisionGroupService, DecisionService],
})
export class AppModule {}
