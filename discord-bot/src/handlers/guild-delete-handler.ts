// Packages
import { Guild } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildDelete event.
 */
export class GuildDeleteHandler extends Handler<Guild> {
  /**
   * Handles the event.
   */
  execute(guild: Guild) {
  }
}
