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
  isOfficer: {
    type: Boolean,
    default: false,
  },
});

export const RoleModel = mongoose.model('Role', schema);
