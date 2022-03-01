// Packages
import { Message } from 'discord.js';

// Local Imports
import { CommandManager } from '../commands';
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js messageCreate event.
 */
export class MessageCreateHandler extends Handler<Message> {
  /**
   * Handles the event.
   */
  async execute(message: Message) {
    try {
      await CommandManager.handleMessage(message);
    } catch (error) {
      Monitor.log(
        MessageCreateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
