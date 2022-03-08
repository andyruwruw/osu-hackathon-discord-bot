// Packages
import { Role } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js roleCreate event.
 */
export class RoleCreateHandler extends Handler<Role> {
  /**
   * Handles the event.
   */
  async execute(role: Role) {
    try {

    } catch (error) {
      Monitor.log(
        RoleCreateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const RoleCreateHandlerInstance = new RoleCreateHandler();
