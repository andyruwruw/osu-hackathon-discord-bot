// Packages
import { Role } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js roleUpdate event.
 */
export class RoleUpdateHandler extends Handler<Role> {
  /**
   * Handles the event.
   */
  execute(
    oldRole: Role,
    newRole: Role,
  ) {
  }
}
