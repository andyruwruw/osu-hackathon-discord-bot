// Packages
import { GuildMember } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildMemberAdd event.
 */
export class GuildMemberAddHandler extends Handler<GuildMember> {
  /**
   * Handles the event.
   */
  execute(member: GuildMember) {
  }
}
