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
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
});

export const GuildModel = model('Guild', schema);
