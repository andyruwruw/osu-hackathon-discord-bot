// Packages
import {
  DMChannel,
  GuildChannel,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_CHANNEL_UPDATE } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js channelUpdate event.
 */
export class ChannelUpdateHandler extends Handler<DMChannel | GuildChannel> {
  /**
   * Handles the event.
   */
  async execute(
    oldChannel: DMChannel | GuildChannel,
    newChannel: DMChannel | GuildChannel,
  ): Promise<void> {
    try {
      if (oldChannel instanceof DMChannel
        || newChannel instanceof DMChannel) {
        return;
      }

      await Handler._database.channel.updateOne({
        id: oldChannel.id,
        guild: oldChannel.guildId,
      }, {
        id: newChannel.id,
        guild: newChannel.guildId,
        name: newChannel.name,
        parent: newChannel.parentId,
      });

      Monitor.log(
        ChannelUpdateHandler,
        MESSAGE_CHANNEL_UPDATE,
        Monitor.Layer.DEBUG,
      );
    } catch (error) {
      Monitor.log(
        ChannelUpdateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
