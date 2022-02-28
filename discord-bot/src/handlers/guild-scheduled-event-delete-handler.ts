// Packages
import { GuildScheduledEvent } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildScheduledEventDelete event.
 */
export class GuildScheduledEventDeleteHandler extends Handler<GuildScheduledEvent> {
  /**
   * Handles the event.
   */
  execute(guildScheduledEvent: GuildScheduledEvent) {
  }
}
