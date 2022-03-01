// Packages
import { Message } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js messageDelete event.
 */
export class MessageDeleteHandler extends Handler<Message> {
  /**
   * Handles the event.
   */
  async execute(message: Message) {
    try {

    } catch (error) {
      Monitor.log(
        MessageDeleteHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
