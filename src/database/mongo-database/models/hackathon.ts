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
  name: {
    type: String,
    default: 'Unnamed',
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
  participants: {
    type: Number,
    default: 0,
  },
  prizePool: {
    type: Number,
    default: 0,
  },
  prizeIds: {
    type: Array,
    of: String,
    default: [],
  },
});

export const HackathonModel = model('Hackathon', schema);
