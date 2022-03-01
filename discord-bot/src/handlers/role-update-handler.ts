// Packages
import { Role } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js roleUpdate event.
 */
export class RoleUpdateHandler extends Handler<Role> {
  /**
   * Handles the event.
   */
  async execute(
    oldRole: Role,
    newRole: Role,
  ) {
    try {

    } catch (error) {
      Monitor.log(
        RoleUpdateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
