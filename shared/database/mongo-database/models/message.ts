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
  guild: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: '',
  },
});

export const MessageModel = model('Message', schema);
