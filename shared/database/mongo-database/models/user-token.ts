// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

export const UserTokenModel = model('UserToken', schema);
