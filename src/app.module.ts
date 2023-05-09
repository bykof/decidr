import { Module } from '@nestjs/common';
import { DecisionController } from './interface/decisionController';
import { DecisionService } from './core/services/decisionService';
import { PrismaClientService } from './core/services/prismaClientService';

@Module({
  imports: [],
  controllers: [DecisionController],
  providers: [PrismaClientService, DecisionService],
})
export class AppModule {}
