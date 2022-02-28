// Packages
import { GuildScheduledEvent } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildScheduledEventUpdate event.
 */
export class GuildScheduledEventUpdateHandler extends Handler<GuildScheduledEvent> {
  /**
   * Handles the event.
   */
  execute(
    oldGuildScheduledEvent: GuildScheduledEvent | undefined,
    newGuildScheduledEvent: GuildScheduledEvent,
  ) {
  }
}
