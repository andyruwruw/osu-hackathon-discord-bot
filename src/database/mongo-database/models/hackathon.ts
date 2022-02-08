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

export const HackathonModel = mongoose.model('Hackathon', schema);
