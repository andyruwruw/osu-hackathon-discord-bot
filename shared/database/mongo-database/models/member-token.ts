// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  member: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

export const MemberTokenModel = model('MemberToken', schema);
