import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { PrismaService } from '../prisma.service';
import { LinkService } from '../link/link.service';
import { LinkController } from '../link/link.controller';

@Module({
  imports: [],
  controllers: [AppController, LinkController],
  providers: [AppService, AppGateway, PrismaService, LinkService],
})
export class AppModule {}
