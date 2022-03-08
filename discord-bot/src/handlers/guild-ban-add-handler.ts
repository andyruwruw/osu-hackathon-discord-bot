// Packages
import { GuildBan } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_USER_BAN_ADD } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildBanAdd event.
 */
export class GuildBanAddHandler extends Handler<GuildBan> {
  /**
   * Handles the event.
   */
  async execute(ban: GuildBan) {
    try {
      Monitor.log(
        GuildBanAddHandler,
        MESSAGE_USER_BAN_ADD,
        Monitor.Layer.UPDATE,
      );

      await Handler._database.member.updateOne({
        id: ban.user.id,
      }, {
        banned: true,
      });
    } catch (error) {
      Monitor.log(
        GuildBanAddHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const GuildBanAddHandlerInstance = new GuildBanAddHandler();
