// Packages
import { Guild } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_GUILD_DELETE } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildDelete event.
 */
export class GuildDeleteHandler extends Handler<Guild> {
  /**
   * Handles the event.
   */
  async execute(guild: Guild) {
    try {
      Monitor.log(
        GuildDeleteHandler,
        MESSAGE_GUILD_DELETE,
        Monitor.Layer.UPDATE,
      );
    } catch (error) {
      Monitor.log(
        GuildDeleteHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const GuildDeleteHandlerInstance = new GuildDeleteHandler();
