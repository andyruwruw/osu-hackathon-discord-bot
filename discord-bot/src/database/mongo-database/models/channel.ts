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

export const ChannelModel = model('Channel', schema);
