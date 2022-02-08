// Packages
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
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

export const MessageModel = mongoose.model('Message', schema);
