// Local Imports
import {
  HACKATHONS,
  PRIZES,
  PROJECTS,
} from './hackathons';
import { Database } from '../../database/database';
import { NAMES } from './names';
import { CHANNELS } from './channels';

// Types
import { IMember } from '../../types';

/**
 * Fills Database with test data.
 */
export const loadSampleData = async (database: Database): Promise<void> => {
  await loadFakeMembers(database);
  await loadFakeChannels(database);
  await loadFakePrizes(database);
  await loadFakeHackathons(database);
  await loadFakeProjects(database);
  await loadFakeMessages(database);
  await loadFakeRoles(database);
  await loadFakeUserTokens(database);
}

/**
 * Fills Database with test channels.
 */
const loadFakeChannels = async (database: Database): Promise<void> => {
  for (let i = 0; i < CHANNELS.length; i += 1) {
    database.channel.create(CHANNELS[i]);
  }
}

/**
 * Fills Database with test hackathons.
 */
const loadFakeHackathons = async (database: Database): Promise<void> => {
  for (let i = 0; i < HACKATHONS.length; i += 1) {
    database.hackathon.create(HACKATHONS[i]);
  }
}

/**
 * Fills Database with test members.
 */
const loadFakeMembers = async (database: Database): Promise<void> => {
  const NUM_USERS = 100;

  for (let i = 0; i < NUM_USERS; i += 1) {
    const user = {
      id: `${i}`,
      guildId: '1',
      name: getRandomName(),
      imageUrl: 'https://picsum.photos/300',
      level: Math.floor(Math.random() * 100),
      xp: Math.floor(Math.random() * 100),
    } as IMember;

    await database.member.create(user);
  }
}

/**
 * Fills Database with test messages.
 */
const loadFakeMessages = async (database: Database): Promise<void> => {
}

/**
 * Fills Database with test prices.
 */
const loadFakePrizes = async (database: Database): Promise<void> => {
  for (let i = 0; i < PRIZES.length; i += 1) {
    database.prize.create(PRIZES[i]);
  }
}

/**
 * Fills Database with test projects.
 */
const loadFakeProjects = async (database: Database): Promise<void> => {
  for (let i = 0; i < PROJECTS.length; i += 1) {
    database.prize.create(PROJECTS[i]);
  }
}

/**
 * Fills Database with test roles.
 */
const loadFakeRoles = async (database: Database): Promise<void> => {
}

/**
 * Fills Database with test user tokens.
 */
const loadFakeUserTokens = async (database: Database): Promise<void> => {
}

/**
 * Returns a random username.
 *
 * @returns {string} Random username.
 */
const getRandomName = (): string => {
  const firstName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const lastName = NAMES[Math.floor(Math.random() * NAMES.length)];

  return `${firstName}${lastName}${Math.floor(Math.random() * 100)}`;
}
