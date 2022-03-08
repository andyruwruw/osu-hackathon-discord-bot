// Packages
import { Role } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js roleDelete event.
 */
export class RoleDeleteHandler extends Handler<Role> {
  /**
   * Handles the event.
   */
  async execute(role: Role) {
    try {

    } catch (error) {
      Monitor.log(
        RoleDeleteHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const RoleDeleteHandlerInstance = new RoleDeleteHandler();
