// Packages
import {
  MessageReaction,
  User,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js messageReactionRemove event.
 */
export class MessageReactionRemoveHandler extends Handler<MessageReaction | User> {
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
        MessageReactionRemoveHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const MessageReactionRemoveHandlerInstance = new MessageReactionRemoveHandler();
