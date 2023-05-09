import { Test, TestingModule } from '@nestjs/testing';
import { DecisionController } from './interface/decisionController';
import { DecisionService } from './core/services/decision.service';

describe('AppController', () => {
  let appController: DecisionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DecisionController],
      providers: [DecisionService],
    }).compile();

    appController = app.get<DecisionController>(DecisionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
