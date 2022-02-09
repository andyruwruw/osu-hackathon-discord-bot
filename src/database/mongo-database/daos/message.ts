// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { MessageModel } from '../models';

// Types
import {
  IDataAccessObject,
  IMessage,
} from '../../../types';

/**
 * Data access object for Messages.
 */
export class Message extends DataAccessObject<IMessage> implements IDataAccessObject<IMessage> {
  /**
   * Instantiates a new Message DataAccessObject.
   */
   constructor() {
    super();
  }

  /**
   * Creates a Message in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @returns {IMessage} The message created.
   */
  async create(
    id: string,
    guildId: string,
    isRoleAssigner = false,
    roleAssignments = [] as Record<string, string>[],
  ): Promise<IMessage> {
    return await this._create({
      id,
      guildId,
      isRoleAssigner,
      roleAssignments,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return MessageModel;
  }
}
