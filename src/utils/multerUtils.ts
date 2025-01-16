/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from 'multer';

// Multer memory storage configuration
const storage = multer.memoryStorage();

// File filter to validate image types
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isValidExt = allowedTypes.test(file.originalname.toLowerCase());
  const isValidMime = allowedTypes.test(file.mimetype);

  if (isValidExt && isValidMime) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only image files are allowed!') as any, false); // TypeScript-কে ভুলটি বলার জন্য টাইপ কাস্টিং
  }
};

// Multer setup with storage and file filter
export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: fileFilter,
});
