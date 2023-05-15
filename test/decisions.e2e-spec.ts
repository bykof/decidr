import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaClientService } from '../src/core/services/prismaClientService';
import { CreateDecisionDto } from '../src/interface/dtos/createDecisionDto';

describe('DecisionController (e2e)', () => {
  let app: INestApplication;
  let prismaClientService: PrismaClientService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaClientService = app.get(PrismaClientService);
    await app.init();
  });
  afterAll(async () => {
    await prismaClientService.prismaClient.decisionGroup.deleteMany();
    await prismaClientService.prismaClient.decision.deleteMany();
  });

  it('/decision (POST) not found', () => {
    const createDecisionDto = new CreateDecisionDto({
      title: 'test',
      decisionGroupId: '404',
      description: 'some description',
    });
    return request(app.getHttpServer())
      .post('/decision')
      .send(createDecisionDto)
      .expect(404);
  });

  it('/decision (POST) works', async () => {
    const decisionGroup =
      await prismaClientService.prismaClient.decisionGroup.create({
        data: {},
      });
    const createDecisionDto = new CreateDecisionDto({
      title: 'test',
      decisionGroupId: decisionGroup.id,
      description: 'some description',
    });
    return request(app.getHttpServer())
      .post('/decisions')
      .send(createDecisionDto)
      .expect(201);
  });
});
