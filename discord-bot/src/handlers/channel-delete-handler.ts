// Packages
import {
  DMChannel,
  GuildChannel,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_CHANNEL_DELETE } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js channelDelete event.
 */
class ChannelDeleteHandler extends Handler<DMChannel | GuildChannel> {
  /**
   * Handles the event.
   */
  async execute(channel: DMChannel | GuildChannel): Promise<void> {
    try {
      if (channel instanceof DMChannel) {
        return;
      }

      await Handler._database.channel.delete({
        id: channel.id,
        guild: channel.guildId,
      });

      Monitor.log(
        ChannelDeleteHandler,
        MESSAGE_CHANNEL_DELETE,
        Monitor.Layer.DEBUG,
      );
    } catch (error) {
      Monitor.log(
        ChannelDeleteHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const ChannelDeleteHandlerInstance = new ChannelDeleteHandler();
