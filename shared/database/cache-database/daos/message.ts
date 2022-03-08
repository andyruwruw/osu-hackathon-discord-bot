// Local Imports
import { DataAccessObject } from './dao';

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
   * Creates a Message in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guild Unique identifier for the Discord server.
   * @param {string} [type = ''] Type of message.
   * @returns {IMessage} The message created.
   */
  async create(
    id: string,
    guild: string,
    type = '',
  ): Promise<IMessage> {
    return this._create({
      id,
      guild,
      type,
    });
  }
}
