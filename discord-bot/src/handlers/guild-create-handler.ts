// Packages
import { Guild } from 'discord.js';

// Local Imports

import { Handler } from './handler';

/**
 * Handles discord.js guildCreate event.
 */
export class GuildCreateHandler extends Handler<Guild> {
  /**
   * Handles the event.
   */
  execute(guild: Guild) {
  }
}
