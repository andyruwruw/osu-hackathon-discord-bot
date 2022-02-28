// Packages
import {
  GuildScheduledEvent,
  User,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js guildScheduledEventUserAdd event.
 */
export class GuildScheduledEventUserAddHandler extends Handler<GuildScheduledEvent | User> {
  /**
   * Handles the event.
   */
  execute(
    guildScheduledEvent: GuildScheduledEvent,
    user: User,
  ) {
  }
}
