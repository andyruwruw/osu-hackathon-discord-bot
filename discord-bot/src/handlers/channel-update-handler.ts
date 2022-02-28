// Packages
import {
  DMChannel,
  GuildChannel,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js channelUpdate event.
 */
export class ChannelUpdateHandler extends Handler<DMChannel | GuildChannel> {
  /**
   * Handles the event.
   */
  execute(
    oldChannel: DMChannel | GuildChannel,
    newChannel: DMChannel | GuildChannel,
  ) {
  }
}
