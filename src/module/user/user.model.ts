import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  socialHandle: { type: String, required: true },
  images: [{ type: String }],
});

export const User = model('User', userSchema);
