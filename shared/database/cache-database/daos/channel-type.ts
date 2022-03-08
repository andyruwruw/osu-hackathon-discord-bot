// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IChannelType,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for ChannelTypes.
 */
export class ChannelType extends DataAccessObject<IChannelType> implements IDataAccessObject<IChannelType> {
  /**
   * Creates a ChannelType in the Database.
   *
   * @param {string} channel Unique identifier for the channel, use Discord ID when available.
   * @param {string} type Type of channel.
   * @returns {IChannelType} The channel type created.
   */
  async create(
    channel: string,
    type: string,
  ): Promise<IChannelType> {
    return this._create({
      channel,
      type,
    });
  }
}
