// Packages
import { GuildMember } from 'discord.js';

// Local Imports
import {
  MESSAGE_GUILD_MEMBER_ADD,
  MESSAGE_GUILD_MEMBER_ADD_REJOIN,
} from '../config/messages';
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildMemberAdd event.
 */
export class GuildMemberAddHandler extends Handler<GuildMember> {
  /**
   * Handles the event.
   */
  async execute(member: GuildMember) {
    try {
      const existing = await Handler._database.member.findOne({
        id: member.id,
      });

      if (existing) {
        Monitor.log(
          GuildMemberAddHandler,
          MESSAGE_GUILD_MEMBER_ADD_REJOIN,
          Monitor.Layer.DEBUG,
        );

        await Handler._database.member.create(
          member.id,
          member.guild.id,
          member.user.username,
          member.nickname,
          member.avatarURL(),
        );
      } else {
        Monitor.log(
          GuildMemberAddHandler,
          MESSAGE_GUILD_MEMBER_ADD,
          Monitor.Layer.DEBUG,
        );

        await Handler._database.member.updateOne({
          id: member.id,
        }, {
          active: true,
        });
      }
    } catch (error) {
      Monitor.log(
        GuildMemberAddHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
