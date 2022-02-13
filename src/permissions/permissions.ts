// Packages
import { ApplicationCommandPermissionData } from 'discord.js';

// Local Imports
import { Database } from '../database';

/**
 * Discord permission level for the command.
 */
export class Permissions {
  /**
   * Role type allowed to use command.
   */
  _type: string;

  /**
   * Whether the specificied role is permited to use the command.
   */
  _allowed: boolean;

  /**
   * Instantiates a new Permissions object.
   *
   * @param {string} type Role type allowed to use command.
   * @param {boolean} allowed Whether the specificied role is permited to use the command.
   */
  constructor(
    type: string = 'default',
    allowed: boolean = true,
  ) {
    this._type = type;
    this._allowed = allowed;
  }

  /**
   * Converts the Permissions object into a Discord permission object.
   */
  async createPermissions(): Promise<ApplicationCommandPermissionData> {
    const role = (await Database.role.find({
      type: this._type,
    }))[0];

    return {
      id: role.id,
      type: 'ROLE',
      permission: this._allowed,
    };
  }
}
