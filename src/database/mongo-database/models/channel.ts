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
  isCommandChannel: {
    type: Boolean,
    default: false,
  },
  isAdminCommandChannel: {
    type: Boolean,
    default: false,
  },
  isErrorLog: {
    type: Boolean,
    default: false,
  },
});

export const ChannelModel = mongoose.model('Channel', schema);
