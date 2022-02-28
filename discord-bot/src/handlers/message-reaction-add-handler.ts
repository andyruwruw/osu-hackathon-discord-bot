// Packages
import {
  MessageReaction,
  User,
} from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js messageReactionAdd event.
 */
export class MessageReactionAddHandler extends Handler<MessageReaction | User> {
  /**
   * Handles the event.
   */
  execute(
    message: MessageReaction,
    user: User,
  ) {
  }
}
