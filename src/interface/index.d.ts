import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}
declare module 'multer-storage-cloudinary';
