// Packages
import {
  MessageReaction,
  User,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js messageReactionAdd event.
 */
export class MessageReactionAddHandler extends Handler<MessageReaction | User> {
  /**
   * Handles the event.
   */
  async execute(
    message: MessageReaction,
    user: User,
  ) {
    try {

    } catch (error) {
      Monitor.log(
        MessageReactionAddHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const MessageReactionAddHandlerInstance = new MessageReactionAddHandler();
