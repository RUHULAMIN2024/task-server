import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import { uploadImageToCloudinary } from '../../utils/cloudinaryUtils';

const createUser = catchAsync(async (req, res) => {
  // Controller function to handle image submission
  const { name, socialHandle } = req.body;
  const images = req.files as Express.Multer.File[];

  // Upload each image to Cloudinary and collect their URLs
  const uploadedImages = await Promise.all(
    images.map(async (image) => {
      const imageUrl = await uploadImageToCloudinary(image.buffer);
      return imageUrl; // Return image URL from Cloudinary
    }),
  );

  const userData: IUser = { name, socialHandle, images: uploadedImages };

  const result = await UserService.createUser(userData);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User Uploaded successfully',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserService.getAllUsers();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Users are retrieved successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUsers,
};
