// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  message: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export const MessageRoleAssignmentModel = model('MessageRoleAssignment', schema);
