// Packages
import { RateLimitData } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_RATE_LIMIT_REACHED } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js rateLimit event.
 */
export class RateLimitHandler extends Handler<RateLimitData> {
  /**
   * Handles the event.
   */
  async execute(rateLimitData: RateLimitData) {
    try {
      Monitor.log(
        RateLimitHandler,
        MESSAGE_RATE_LIMIT_REACHED,
        Monitor.Layer.UPDATE,
      );
    } catch (error) {
      Monitor.log(
        RateLimitHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
