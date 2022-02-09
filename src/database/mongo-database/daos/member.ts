// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { MemberModel } from '../models';

// Types
import {
  IDataAccessObject,
  IMember,
} from '../../../types';

/**
 * Data access object for Members.
 */
export class Member extends DataAccessObject<IMember> implements IDataAccessObject<IMember> {
  /**
   * Instantiates a new Member DataAccessObject.
   */
   constructor() {
    super();
  }

  /**
   * Creates a Member in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @param {string} name Name of the item.
   * @param {string} imageUrl Members profile image.
   * @param {number} level Member's Discord level.
   * @param {number} xp Member's XP to the next level.
   * @returns {IMember} The member created.
   */
  async create(
    id: string,
    guildId: string,
    name: string,
    imageUrl: string = '#',
    level: number = 0,
    xp: number = 0,
  ): Promise<IMember> {
    return await this._create({
      id,
      guildId,
      name,
      imageUrl,
      level,
      xp,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return MemberModel;
  }
}
