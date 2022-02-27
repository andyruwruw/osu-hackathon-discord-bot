// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IMemberToken,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for MemberTokens.
 */
export class MemberToken extends DataAccessObject<IMemberToken> implements IDataAccessObject<IMemberToken> {
  /**
   * Creates a MemberToken in the Database.
   *
   * @param {string} member Unique identifier for the user, use Discord ID when available.
   * @param {string} token Token used to login.
   * @returns {IMemberToken} The user token created.
   */
  async create(
    member: string,
    token: string,
  ): Promise<IMemberToken> {
    return this._create({
      member,
      token,
    });
  }
}
