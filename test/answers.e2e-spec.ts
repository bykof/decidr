import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaClientService } from '../src/core/services/prismaClientService';
import { CreateDecisionDto } from '../src/interface/dtos/createDecisionDto';
import CreateAnswerDto from '../src/interface/dtos/createAnswerDto';
import { AnswerType } from '../src/core/domain/answerType';

describe('AnswersController (e2e)', () => {
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

  it('/answers (POST) not found', () => {
    const createAnswerDto = new CreateAnswerDto({
      name: 'Test',
      decisionId: '404',
      answerType: AnswerType.NO,
    });
    return request(app.getHttpServer())
      .post('/answers')
      .send(createAnswerDto)
      .expect(404);
  });

  it('/answers (POST) works', async () => {
    const decisionGroup =
      await prismaClientService.prismaClient.decisionGroup.create({ data: {} });
    const decision = await prismaClientService.prismaClient.decision.create({
      data: {
        decisionGroup: { connect: { id: decisionGroup.id } },
        title: 'Test',
        description: 'Another test',
      },
    });
    const createAnswerDto = new CreateAnswerDto({
      name: 'Test',
      decisionId: decision.id,
      answerType: AnswerType.NO,
    });
    return request(app.getHttpServer())
      .post('/answers')
      .send(createAnswerDto)
      .expect(201);
  });

  it('/answers (POST) conflict', async () => {
    const decisionGroup =
      await prismaClientService.prismaClient.decisionGroup.create({ data: {} });
    const decision = await prismaClientService.prismaClient.decision.create({
      data: {
        decisionGroup: { connect: { id: decisionGroup.id } },
        title: 'Test',
        description: 'Another test',
      },
    });
    const createAnswerDto = new CreateAnswerDto({
      name: 'Test',
      decisionId: decision.id,
      answerType: AnswerType.NO,
    });

    await request(app.getHttpServer()).post('/answers').send(createAnswerDto);
    // Send the same answer again
    return request(app.getHttpServer())
      .post('/answers')
      .send(createAnswerDto)
      .expect(409);
  });
});
