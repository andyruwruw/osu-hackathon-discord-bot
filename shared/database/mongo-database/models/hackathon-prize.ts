// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  prize: {
    type: String,
    required: true,
  },
  hackathon: {
    type: String,
    required: true,
  },
});

export const HackathonPrizeModel = model('HackathonPrize', schema);
