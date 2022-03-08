// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  member: {
    type: String,
    required: true,
  },
  hackathon: {
    type: String,
    required: true,
  },
});

export const HackathonParticipationModel = model('HackathonParticipation', schema);
