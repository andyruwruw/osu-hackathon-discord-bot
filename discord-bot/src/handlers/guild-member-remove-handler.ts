// Packages
import {
  GuildMember,
  PartialGuildMember,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildMemberRemove event.
 */
export class GuildMemberRemoveHandler extends Handler<GuildMember | PartialGuildMember> {
  /**
   * Handles the event.
   */
  execute(member: GuildMember | PartialGuildMember) {
  }
}
