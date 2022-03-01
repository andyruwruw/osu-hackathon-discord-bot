// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IDataAccessObject,
  IPrize,
} from '../../../types';

/**
 * Data access object for Prizes.
 */
export class Prize extends DataAccessObject<IPrize> implements IDataAccessObject<IPrize> {
  /**
   * Creates a Prize in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guild Unique identifier for the Discord server.
   * @param {string} [name = 'Prize'] Name of the prize.
   * @param {string} [description = ''] Description of the prize.
   * @param {number} [index = 0] Index of the prize.
   * @returns {IPrize} The prize created.
   */
  async create(
    id: string,
    guild: string,
    name: 'Prize',
    description = '',
    index = 0,
  ): Promise<IPrize> {
    return this._create({
      id,
      guild,
      name, 
      description,
      index,
    });
  }
}
