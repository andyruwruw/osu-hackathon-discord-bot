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
  color: {
    type: String,
    default: '#FFFFFF',
  },
  type: {
    type: String,
    default: 0,
  },
});

export const RoleModel = model('Role', schema);
