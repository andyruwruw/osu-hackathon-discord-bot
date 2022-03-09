// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { MemberRoleModel } from '../models';

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

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return MemberRoleModel;
  }
}
