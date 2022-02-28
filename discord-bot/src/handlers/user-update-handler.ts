// Packages
import { User } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js userUpdate event.
 */
export class UserUpdateHandler extends Handler<User> {
  /**
   * Handles the event.
   */
  execute(
    oldUser: User,
    newUser: User,
  ) {
  }
}
