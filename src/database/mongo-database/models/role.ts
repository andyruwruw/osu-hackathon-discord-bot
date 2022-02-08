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
  color: {
    type: String,
    default: '#FFFFFF',
  },
  isOfficer: {
    type: Boolean,
    default: false,
  },
  isPresident: {
    type: Boolean,
    default: false,
  },
  isVicePresident: {
    type: Boolean,
    default: false,
  },
  isParticipant: {
    type: Boolean,
    default: false,
  },
  participantSeasonIndex: {
    type: Number,
    default: 0,
  },
  isOverallPrizeWinner: {
    type: Boolean,
    default: false,
  },
  isNewStudentPrizeWinner: {
    type: Boolean,
    default: false,
  },
  isGradStudentAlumniPrizeWinner: {
    type: Boolean,
    default: false,
  },
  prizeIndex: {
    type: Number,
    default: 0,
  },
  isPronouns: {
    type: Boolean,
    default: false,
  },
  pronounType: {
    type: String,
    default: 'Ask',
  },
});

export const RoleModel = mongoose.model('Role', schema);
