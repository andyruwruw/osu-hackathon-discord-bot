// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IChannel,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for Channels.
 */
export class Channel extends DataAccessObject<IChannel> implements IDataAccessObject<IChannel> {
  /**
   * Creates a Channel in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @param {boolean} [isCommandChannel = false] Whether the channel is the designated channel for commands.
   * @param {boolean} [isAdminCommandChannel = false] Whether the channel is the designated channel for admin commands.
   * @param {boolean} [isErrorLog = false] Whether the channel is the designated channel for error logs.
   * @returns {IChannel} The channel created.
   */
  async create(
    id: string,
    guildId: string,
    isCommandChannel = false,
    isAdminCommandChannel = false,
    isErrorLog = false,
  ): Promise<IChannel> {
    return this._create({
      id,
      guildId,
      types,
    });
  }
}
