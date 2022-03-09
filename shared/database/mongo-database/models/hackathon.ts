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
    default: 'Unnamed',
  },
  description: {
    type: String,
    default: 'Unnamed',
  },
  image: {
    type: String,
    default: '',
  },
  banner: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'TBA',
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
  href: {
    type: String,
    default: '',
  },
  prizePool: {
    type: Number,
    default: 0,
  },
});

export const HackathonModel = model('Hackathon', schema);
