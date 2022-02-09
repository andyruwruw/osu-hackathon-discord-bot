// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { PrizeModel } from '../models';

// Types
import { IPrize } from '../../../types';

/**
 * Data access object for Prizes.
 */
export class Prize extends DataAccessObject<IPrize> {
  /**
   * Instantiates a new Prize DataAccessObject.
   */
   constructor() {
    super();
  }

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
    return await this._create({
      id,
      guildId,
      name, 
      description,
      index,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return PrizeModel;
  }
}
