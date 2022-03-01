// Packages
import { Model } from 'mongoose';

// Local Imports
import { DataAccessObject } from './dao';
import { ChannelModel } from '../models';

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
   * @param {string} guild Unique identifier for the Discord server.
   * @param {string} name Name of the channel.
   * @param {string} description Description of the channel's purpose.
   * @param {string} [parent = ''] Parent channel to this channel.
   * @returns {IChannel} The channel created.
   */
  async create(
    id: string,
    guild: string,
    name: string,
    description: string,
    parent = '',
  ): Promise<IChannel> {
    return this._create({
      id,
      guild,
      name,
      description,
      parent,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, {}, {}, {}> {
    return ChannelModel;
  }
}
