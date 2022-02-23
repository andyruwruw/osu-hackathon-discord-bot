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
   * @param {string} guildId Unique identifier for the Discord server.
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

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return RoleModel;
  }
}
