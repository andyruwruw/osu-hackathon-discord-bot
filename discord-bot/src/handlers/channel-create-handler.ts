// Packages
import { GuildChannel } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js channelCreate event.
 */
export class ChannelCreateHandler extends Handler<GuildChannel> {
  /**
   * Handles the event.
   */
  execute(channel: GuildChannel) {
  }
}
