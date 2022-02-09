// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IPrize,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for Prizes.
 */
export class Prize extends DataAccessObject<IPrize> implements IDataAccessObject<IPrize> {
  /**
   * Creates a Prize in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @returns {IPrize} The prize created.
   */
  async create(
    id: string,
    guildId: string,
    name: 'Prize',
    description = '',
    index = 0,
  ): Promise<IPrize> {
    return this._create({
      id,
      guildId,
      name, 
      description,
      index,
    });
  }
}
