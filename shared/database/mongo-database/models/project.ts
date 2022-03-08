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
  hackathon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: 'Unnamed',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  live: {
    type: String,
    default: '',
  },
  demo: {
    type: String,
    default: '',
  },
  github: {
    type: String,
    default: '',
  },
  prize: {
    type: String,
    default: '',
  },
});

export const ProjectModel = model('Project', schema);
