// Packages
import { User } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js userUpdate event.
 */
export class UserUpdateHandler extends Handler<User> {
  /**
   * Handles the event.
   */
  async execute(
    oldUser: User,
    newUser: User,
  ) {
    try {

    } catch (error) {
      Monitor.log(
        UserUpdateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const UserUpdateHandlerInstance = new UserUpdateHandler();
