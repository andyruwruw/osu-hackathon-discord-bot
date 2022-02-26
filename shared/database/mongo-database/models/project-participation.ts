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
  project: {
    type: String,
    required: true,
  },
});

export const ProjectParticipationModel = model('ProjectParticipation', schema);
