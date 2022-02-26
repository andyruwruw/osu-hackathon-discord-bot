// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  channel: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const ChannelTypeModel = model('ChannelType', schema);
