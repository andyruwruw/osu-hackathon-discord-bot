// Packages
import { RateLimitData } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js rateLimit event.
 */
export class RateLimitHandler extends Handler<RateLimitData> {
  /**
   * Handles the event.
   */
  execute(rateLimitData: RateLimitData) {
  }
}
