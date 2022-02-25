// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { UserTokenModel } from '../models';

// Types
import {
  IUserToken,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for UserTokens.
 */
export class UserToken extends DataAccessObject<IUserToken> implements IDataAccessObject<IUserToken> {
  /**
   * Creates a UserToken in the Database.
   *
   * @param {string} userId Unique identifier for the user, use Discord ID when available.
   * @param {string} token Token used to login.
   * @returns {IUserToken} The user token created.
   */
  async create(
    userId: string,
    token: string,
  ): Promise<IUserToken> {
    return this._create({
      userId,
      token,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return UserTokenModel;
  }
}