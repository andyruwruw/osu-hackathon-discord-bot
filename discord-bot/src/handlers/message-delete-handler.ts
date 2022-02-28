// Packages
import { Message } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js messageDelete event.
 */
export class MessageDeleteHandler extends Handler<Message> {
  /**
   * Handles the event.
   */
  execute(message: Message) {
  }
}
