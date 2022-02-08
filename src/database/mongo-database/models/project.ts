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
  hackathonId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Unnamed',
  },
  description: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: '#',
  },
  userIds: {
    type: Array,
    of: String,
  },
  liveUrl: {
    type: String,
    default: '#',
  },
  demoUrl: {
    type: String,
    default: '#',
  },
  prizeId: {
    type: String,
    default: '',
  },
});

export const ProjectModel = mongoose.model('Project', schema);
