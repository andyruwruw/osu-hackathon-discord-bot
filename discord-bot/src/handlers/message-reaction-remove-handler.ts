// Packages
import {
  MessageReaction,
  User,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js messageReactionRemove event.
 */
export class MessageReactionRemoveHandler extends Handler<MessageReaction | User> {
  /**
   * Handles the event.
   */
  execute(
    message: MessageReaction,
    user: User,
  ) {
  }
}
