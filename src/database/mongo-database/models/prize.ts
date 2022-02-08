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
  title: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: '',
  },
});

export const PrizeModel = mongoose.model('Prize', schema);
