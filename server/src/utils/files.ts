import * as path from 'node:path';
import * as fs from 'node:fs';
import * as multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

export default multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 25,
  },
});

export const deleteFile = (file) => {
  fs.unlink(file.path, (err) => {
    if (err) {
      console.error(err);
      throw new Error('Failed to delete file');
    }
  });
};
