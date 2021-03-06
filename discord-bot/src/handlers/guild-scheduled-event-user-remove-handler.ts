// Packages
import {
  GuildScheduledEvent,
  User,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js guildScheduledEventUserRemove event.
 */
export class GuildScheduledEventUserRemoveHandler extends Handler<GuildScheduledEvent | User> {
  /**
   * Handles the event.
   */
  async execute(
    guildScheduledEvent: GuildScheduledEvent,
    user: User,
  ) {
    try {
      // Still need to see if we need to do anything here.
    } catch (error) {
      Monitor.log(
        GuildScheduledEventUserRemoveHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const GuildScheduledEventUserRemoveHandlerInstance = new GuildScheduledEventUserRemoveHandler();
