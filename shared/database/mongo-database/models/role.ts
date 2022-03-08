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
    default: '',
  },
});

export const RoleModel = model('Role', schema);
