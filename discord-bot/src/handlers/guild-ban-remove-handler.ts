// Packages
import { GuildBan } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';
import { MESSAGE_USER_BAN_REMOVE } from '../config/messages';

/**
 * Handles discord.js guildBanRemove event.
 */
export class GuildBanRemoveHandler extends Handler<GuildBan> {
  /**
   * Handles the event.
   */
  async execute(ban: GuildBan) {
    try {
      Monitor.log(
        GuildBanRemoveHandler,
        MESSAGE_USER_BAN_REMOVE,
        Monitor.Layer.UPDATE,
      );

      await Handler._database.member.updateOne({
        id: ban.user.id,
      }, {
        banned: false,
      });
    } catch (error) {
      Monitor.log(
        GuildBanRemoveHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const GuildBanRemoveHandlerInstance = new GuildBanRemoveHandler();
