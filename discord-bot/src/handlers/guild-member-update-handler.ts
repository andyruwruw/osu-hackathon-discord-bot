// Packages
import { GuildMember } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';
import { MESSAGE_GUILD_MEMBER_UPDATE } from '../config/messages';

/**
 * Handles discord.js guildMemberUpdate event.
 */
export class GuildMemberUpdateHandler extends Handler<GuildMember> {
  /**
   * Handles the event.
   */
  async execute(
    oldMember: GuildMember,
    newMember: GuildMember,
  ) {
    try {
      Monitor.log(
        GuildMemberUpdateHandler,
        MESSAGE_GUILD_MEMBER_UPDATE,
        Monitor.Layer.DEBUG,
      );

      await Handler._database.member.updateOne({
        id: oldMember.id,
      }, {
        id: newMember.id,
        guild: newMember.guild.id,
        name: newMember.user.username,
        nickname: newMember.nickname,
        image: newMember.avatarURL(),
      });
    } catch (error) {
      Monitor.log(
        GuildMemberUpdateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
