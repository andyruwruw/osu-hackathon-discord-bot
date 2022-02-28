// Packages
import { GuildBan } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildBanAdd event.
 */
export class GuildBanAddHandler extends Handler<GuildBan> {
  /**
   * Handles the event.
   */
  execute(ban: GuildBan) {
  }
}
