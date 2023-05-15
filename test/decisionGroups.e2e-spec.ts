import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaClientService } from '../src/core/services/prismaClientService';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterAll(async () => {
    const prismaClientService = app.get(PrismaClientService);
    await prismaClientService.prismaClient.decisionGroup.deleteMany();
  });

  it('/decision-groups (POST)', () => {
    return request(app.getHttpServer()).post('/decision-groups').expect(201);
  });
});
