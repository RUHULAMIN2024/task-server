import { IUser } from './user.interface';
import { User } from './user.model';
const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
};
