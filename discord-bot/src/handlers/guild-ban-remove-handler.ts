// Packages
import { GuildBan } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildBanRemove event.
 */
export class GuildBanRemoveHandler extends Handler<GuildBan> {
  /**
   * Handles the event.
   */
  execute(ban: GuildBan) {
  }
}
