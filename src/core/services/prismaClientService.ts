import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaClientService {
  prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = new PrismaClient();
  }
}
