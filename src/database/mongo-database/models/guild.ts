// Packages
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
});

export const GuildModel = mongoose.model('Guild', schema);
