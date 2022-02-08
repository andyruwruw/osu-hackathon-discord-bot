// Local Imports
import { GuildModel } from '../models';

// Types
import { IGuild } from '../../../types';

/**
 * Creates a new guild in the database.
 *
 * @param {string} guildId Discord guild ID.
 * @returns {Promise<IGuild>} Guild object.
 */
const createGuild = async (guildId: string): Promise<IGuild> => {
  const newGuild = new GuildModel({ id: guildId });

  await newGuild.save();
  return newGuild.toObject() as IGuild;
};

export default {
  createGuild,
};
