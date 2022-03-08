import { Guild } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';
import { MESSAGE_GUILD_UPDATE } from '../config/messages';

/**
 * Handles discord.js guildUpdate event.
 */
export class GuildUpdateHandler extends Handler<Guild> {
  /**
   * Handles the event.
   */
  async execute(
    oldGuild: Guild,
    newGuild: Guild,
  ) {
    try {
      Monitor.log(
        GuildUpdateHandler,
        MESSAGE_GUILD_UPDATE,
        Monitor.Layer.DEBUG,
      );

      await Handler._database.guild.updateOne({
        id: oldGuild.id,
      }, {
        id: newGuild.id,
        name: newGuild.name,
        image: newGuild.iconURL(),
      });
    } catch (error) {
      Monitor.log(
        GuildUpdateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const GuildUpdateHandlerInstance = new GuildUpdateHandler();
