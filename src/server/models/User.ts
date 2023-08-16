import mongoose from 'mongoose';
import { UserSchema } from '@/server/Schema';
const { model, models } = mongoose;

const UserModel = models.User || model('User', UserSchema);

export default UserModel;
