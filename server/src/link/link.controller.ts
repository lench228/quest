import {
  Controller,
  Post,
  UploadedFile,
  BadRequestException,
  Delete,
} from '@nestjs/common';

import { LinkService } from './link.service';

import { deleteFile } from '../utils/files';

import upload from '../utils/files';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('upload')
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Файл не загружен!');
    }
    const result = await this.linkService.createLink(file.path);

    upload.single(file.path);
    return {
      message: 'Изображение загружено и обработано успешно!',
      data: result,
    };
  }

  @Delete('delete')
  async delete(@UploadedFile() file: Express.Multer.File) {
    deleteFile(file.path);
    return { message: 'Файл удален' };
  }
}
