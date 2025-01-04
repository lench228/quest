import { PrismaClient, Prisma } from '@prisma/client';
import { NestExpressApplication } from '@nestjs/platform-express';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', () => {
      diskStorage({
        destination: './uploads', // Папка для сохранения
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      });
      app.close();
    });
  }
}
