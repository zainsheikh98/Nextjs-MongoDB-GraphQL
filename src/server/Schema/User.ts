import { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});

export default UserSchema;
