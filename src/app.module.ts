import { Module } from '@nestjs/common';
import { DecisionController } from './interface/decisionController';
import { DecisionService } from './core/services/decisionService';
import { PrismaClientService } from './core/services/prismaClientService';
import DecisionGroupService from './core/services/decisionGroupService';
import DecisionGroupController from './interface/decisionGroupController';
import AnswerController from './interface/answerController';
import AnswerService from './core/services/answerService';

@Module({
  imports: [],
  controllers: [DecisionGroupController, DecisionController, AnswerController],
  providers: [
    PrismaClientService,
    DecisionGroupService,
    DecisionService,
    AnswerService,
  ],
})
export class AppModule {}
