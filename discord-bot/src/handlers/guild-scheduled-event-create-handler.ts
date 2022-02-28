// Packages
import { GuildScheduledEvent } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildScheduledEventCreate event.
 */
export class GuildScheduledEventCreateHandler extends Handler<GuildScheduledEvent> {
  /**
   * Handles the event.
   */
  execute(guildScheduledEvent: GuildScheduledEvent) {
  }
}
