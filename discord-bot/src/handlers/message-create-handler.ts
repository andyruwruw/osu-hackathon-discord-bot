// Packages
import { Message } from 'discord.js';

// Local Imports
import { CommandManager } from '../commands';
import { Handler } from './handler';

/**
 * Handles discord.js messageCreate event.
 */
export class MessageCreateHandler extends Handler<Message> {
  /**
   * Handles the event.
   */
  execute(message: Message) {
    CommandManager.handleMessage(message);
  }
}
