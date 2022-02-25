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
  type: {
    type: Array,
    of: String,
    default: [],
  },
});

export const ChannelModel = model('Channel', schema);
