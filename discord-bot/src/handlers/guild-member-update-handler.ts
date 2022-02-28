// Packages
import { GuildMember } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildMemberUpdate event.
 */
export class GuildMemberUpdateHandler extends Handler<GuildMember> {
  /**
   * Handles the event.
   */
  execute(
    oldMember: GuildMember,
    newMember: GuildMember,
  ) {
  }
}
