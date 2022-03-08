// Packages
import { GuildScheduledEvent } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildScheduledEventUpdate event.
 */
export class GuildScheduledEventUpdateHandler extends Handler<GuildScheduledEvent> {
  /**
   * Handles the event.
   */
  async execute(
    oldGuildScheduledEvent: GuildScheduledEvent | undefined,
    newGuildScheduledEvent: GuildScheduledEvent,
  ) {
    try {
      // Still need to see if we need to do anything here.
    } catch (error) {
      Monitor.log(
        GuildScheduledEventUpdateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const GuildScheduledEventUpdateHandlerInstance = new GuildScheduledEventUpdateHandler();
