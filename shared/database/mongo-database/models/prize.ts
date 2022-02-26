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
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },
});

export const PrizeModel = model('Prize', schema);
