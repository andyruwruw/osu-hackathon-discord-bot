// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  isRoleAssigner: {
    type: Boolean,
    default: false,
  },
  roleAssignments: {
    type: Array,
    of: {
      roleId: String,
      emoji: String,
    },
    default: [],
  },
});

export const MessageModel = model('Message', schema);
