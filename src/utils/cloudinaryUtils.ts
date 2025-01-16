import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';
import config from '../config';

// Cloudinary configuration
cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret,
});

// Function to upload image to Cloudinary
export const uploadImageToCloudinary = async (imageBuffer: Buffer) => {
  return new Promise<string>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'social_media_images',
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result?.secure_url || '');
        }
      },
    );

    // Create a readable stream from the buffer and pipe it to Cloudinary
    const readableStream = new Readable();
    readableStream.push(imageBuffer);
    readableStream.push(null); // End of stream
    readableStream.pipe(uploadStream);
  });
};
