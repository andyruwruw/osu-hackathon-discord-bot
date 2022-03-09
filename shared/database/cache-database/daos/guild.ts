// Local Imports
import { DataAccessObject } from './dao';

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
   * @param {string} [image = ''] Image hash.
   * @returns {IGuild} The Guild created.
   */
  async create(
    id: string,
    name: string,
    image = '',
  ): Promise<IGuild> {
    return this._create({
      id,
      name,
      image,
    });
  }
}
