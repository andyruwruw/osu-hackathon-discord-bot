// Packages
import { GuildScheduledEvent } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildScheduledEventCreate event.
 */
export class GuildScheduledEventCreateHandler extends Handler<GuildScheduledEvent> {
  /**
   * Handles the event.
   */
  async execute(guildScheduledEvent: GuildScheduledEvent) {
    try {
      // Still need to see if we need to do anything here.
    } catch (error) {
      Monitor.log(
        GuildScheduledEventCreateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const GuildScheduledEventCreateHandlerInstance = new GuildScheduledEventCreateHandler();
