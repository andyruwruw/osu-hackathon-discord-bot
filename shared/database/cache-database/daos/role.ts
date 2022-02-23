// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IRole,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for Roles.
 */
export class Role extends DataAccessObject<IRole> implements IDataAccessObject<IRole> {
  /**
   * Creates a Role in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @param {string} name Name of the role.
   * @param {string} color Color of the role.
   * @param {string} type Type of role.
   * @returns {IRole} The Role created.
   */
  async create(
    id: string,
    guildId: string,
    name = 'Unnamed',
    color = '#FF8000',
    type = 'default',
  ): Promise<IRole> {
    return this._create({
      id,
      guildId,
      name,
      color,
      type,
    });
  }
}