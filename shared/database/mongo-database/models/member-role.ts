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
  role: {
    type: String,
    required: true,
  },
});

export const MemberRoleModel = model('MemberRole', schema);
