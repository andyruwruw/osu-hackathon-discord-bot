// Packages
import {
  GuildMember,
  PartialGuildMember,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_GUILD_MEMBER_REMOVE } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildMemberRemove event.
 */
export class GuildMemberRemoveHandler extends Handler<GuildMember | PartialGuildMember> {
  /**
   * Handles the event.
   */
  async execute(member: GuildMember | PartialGuildMember) {
    try {
      Monitor.log(
        GuildMemberRemoveHandler,
        MESSAGE_GUILD_MEMBER_REMOVE,
        Monitor.Layer.DEBUG,
      );

      // Processing multiple promises at once.
      await Promise.all([
        Handler._database.memberToken.delete({
          member: member.id,
        }),
        Handler._database.memberRole.delete({
          member: member.id,
        }),
        Handler._database.member.updateOne({
          id: member.id,
        }, {
          active: false,
        }),
      ]);
    } catch (error) {
      Monitor.log(
        GuildMemberRemoveHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
