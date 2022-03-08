// Packages
import { GuildChannel } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_CHANNEL_CREATE } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js channelCreate event.
 */
class ChannelCreateHandler extends Handler<GuildChannel> {
  /**
   * Handles the event.
   */
  async execute(channel: GuildChannel): Promise<void> {
    try {
      await Handler._database.channel.create(
        channel.id,
        channel.guildId,
        channel.name,
        '',
        channel.parentId,
      );

      Monitor.log(
        ChannelCreateHandler,
        MESSAGE_CHANNEL_CREATE,
        Monitor.Layer.DEBUG,
      );
    } catch (error) {
      Monitor.log(
        ChannelCreateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const ChannelCreateHandlerInstance = new ChannelCreateHandler();
