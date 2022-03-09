// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { MessageRoleAssignmentModel } from '../models';

// Types
import {
  IDataAccessObject,
  IMessageRoleAssignment,
} from '../../../types';

/**
 * Data access object for Messages.
 */
export class MessageRoleAssignment extends DataAccessObject<IMessageRoleAssignment> implements IDataAccessObject<IMessageRoleAssignment> {
  /**
   * Creates a MessageRoleAssignment in the Database.
   *
   * @param {string} message Unique identifier for the message, use Discord ID when available.
   * @param {string} emoji Unique identifier for the emoji, use Discord ID when available.
   * @param {string} role Unique identifier for the role, use Discord ID when available.
   * @returns {IMessageRoleAssignment} The message role assignement created.
   */
  async create(
    message: string,
    emoji: string,
    role: string,
  ): Promise<IMessageRoleAssignment> {
    return this._create({
      message,
      emoji,
      role,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return MessageRoleAssignmentModel;
  }
}
