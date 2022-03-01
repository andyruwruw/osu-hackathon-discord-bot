// Packages
import { Guild } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_GUILD_CREATE } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';
import { DataSync } from '../helpers/data-sync';

/**
 * Handles discord.js guildCreate event.
 */
export class GuildCreateHandler extends Handler<Guild> {
  /**
   * Handles the event.
   */
  async execute(guild: Guild) {
    try {
      Monitor.log(
        GuildCreateHandler,
        MESSAGE_GUILD_CREATE,
        Monitor.Layer.UPDATE,
      );

      await DataSync.syncDatabase(Handler._client);
    } catch (error) {
      Monitor.log(
        GuildCreateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
