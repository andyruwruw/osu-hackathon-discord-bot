// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { RoleModel } from '../models';

// Types
import {
  IDataAccessObject,
  IRole,
} from '../../../types';

/**
 * Data access object for Roles.
 */
export class Role extends DataAccessObject<IRole> implements IDataAccessObject<IRole> {
  /**
   * Creates a Role in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guild Unique identifier for the Discord server.
   * @param {string} [name = 'Unnamed'] Name of the role.
   * @param {string} [color = '#FF8000'] Color of the role.
   * @param {string} [type = 'default'] Type of role.
   * @returns {IRole} The Role created.
   */
  async create(
    id: string,
    guild: string,
    name = 'Unnamed',
    color = '#FF8000',
    type = 'default',
  ): Promise<IRole> {
    return this._create({
      id,
      guild,
      name,
      color,
      type,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return RoleModel;
  }
}
