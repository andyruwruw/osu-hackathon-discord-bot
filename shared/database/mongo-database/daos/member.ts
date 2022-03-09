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
   * Creates a Member in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guild Unique identifier for the Discord server.
   * @param {string} name Name of the item.
   * @param {string} [nickname = ''] User's server nickname.
   * @param {string} [imageUrl = ''] Members profile image.
   * @param {number} [level = 0] Member's Discord level.
   * @param {number} [xp = 0] Member's XP to the next level.
   * @param {boolean} [active = false] Whether the member is active.
   * @returns {IMember} The member created.
   */
  async create(
    id: string,
    guild: string,
    name: string,
    nickname = '',
    image = '',
    level = 0,
    xp = 0,
    active = false,
  ): Promise<IMember> {
    return this._create({
      id,
      guild,
      name,
      nickname,
      image,
      level,
      xp,
      active,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return MemberModel;
  }
}
