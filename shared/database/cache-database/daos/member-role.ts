// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IMemberRole,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for MemberRoles.
 */
export class MemberRole extends DataAccessObject<IMemberRole> implements IDataAccessObject<IMemberRole> {
  /**
   * Creates a MemberRole in the Database.
   *
   * @param {string} role Id of role.
   * @param {string} member Id of member.
   * @returns {IMemberRole} The MemberRole created.
   */
  async create(
    role: string,
    member: string,
  ): Promise<IMemberRole> {
    return this._create({
      role,
      member,
    });
  }
}
