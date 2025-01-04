import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { LinkService } from './link.service';
import { extname } from 'path';
import { upload } from '../utils/files';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('upload')
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Файл не загружен!');
    }
    const result = await this.linkService.createLink(file.path);
    console.log(file);
    upload.single(file.path);
    return {
      message: 'Изображение загружено и обработано успешно!',
      data: result,
    };
  }
}
