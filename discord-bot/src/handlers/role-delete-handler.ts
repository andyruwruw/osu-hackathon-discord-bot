// Packages
import { Role } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js roleDelete event.
 */
export class RoleDeleteHandler extends Handler<Role> {
  /**
   * Handles the event.
   */
  execute(role: Role) {
  }
}
