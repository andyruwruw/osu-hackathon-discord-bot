// Packages
import { Role } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js roleCreate event.
 */
export class RoleCreateHandler extends Handler<Role> {
  /**
   * Handles the event.
   */
  execute(role: Role) {
  }
}
