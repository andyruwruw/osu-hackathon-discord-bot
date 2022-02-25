// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { GuildModel } from '../models';

// Types
import {
  IGuild,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for Guilds.
 */
export class Guild extends DataAccessObject<IGuild> implements IDataAccessObject<IGuild> {
  /**
   * Creates a Guild in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} name Name of the guild
   * @param {string} [icon = ''] Icon hash.
   * @returns {IGuild} The Guild created.
   */
  async create(
    id: string,
    name: string,
    icon: string = '',
  ): Promise<IGuild> {
    return this._create({
      id,
      name,
      icon,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return GuildModel;
  }
}
