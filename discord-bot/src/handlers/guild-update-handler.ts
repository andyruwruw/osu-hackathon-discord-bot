import { Guild } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildUpdate event.
 */
export class GuildUpdateHandler extends Handler<Guild> {
  /**
   * Handles the event.
   */
   execute(
    oldGuild: Guild,
    newGuild: Guild,
  ) {
  }
}
