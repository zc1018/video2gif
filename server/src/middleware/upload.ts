import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const ALLOWED_MIMES = [
  'video/mp4', 'video/avi', 'video/quicktime', 'video/x-matroska',
  'video/webm', 'video/x-flv', 'video/x-msvideo', 'video/mpeg',
  'video/3gpp', 'video/x-ms-wmv'
];

const ALLOWED_EXTS = ['.mp4', '.avi', '.mov', '.mkv', '.webm', '.flv', '.mpeg', '.mpg', '.wmv', '.3gp'];

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../uploads'),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${uuidv4()}${ext}`);
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: 500 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ALLOWED_MIMES.includes(file.mimetype) || ALLOWED_EXTS.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`不支持的文件格式: ${ext}`));
    }
  }
});
