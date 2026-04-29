
import { Injectable } from '@nestjs/common';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  tasks: any;
  constructor() {
    const adapter = new PrismaBetterSqlite3({
        url: process.env.DATABASE_URL 
      });
    super({ adapter });
  }
}

