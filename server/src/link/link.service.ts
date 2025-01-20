import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LinkService {
  constructor(private prisma: PrismaService) {}

  async createLink(imagePath: string): Promise<{ shortLink: string }> {
    const shortLink = process.env.FRONTEND_LOCAL_URL;
    const link = await this.prisma.link.create({
      data: {
        image: imagePath,
        shortLink,
      },
    });
    link.shortLink = link.shortLink + ':' + link.id;

    return { shortLink: link.shortLink };
  }
}
