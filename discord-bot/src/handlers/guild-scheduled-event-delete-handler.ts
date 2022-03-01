// Packages
import { GuildScheduledEvent } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildScheduledEventDelete event.
 */
export class GuildScheduledEventDeleteHandler extends Handler<GuildScheduledEvent> {
  /**
   * Handles the event.
   */
  async execute(guildScheduledEvent: GuildScheduledEvent) {
    try {
      // Still need to see if we need to do anything here.
    } catch (error) {
      Monitor.log(
        GuildScheduledEventDeleteHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
