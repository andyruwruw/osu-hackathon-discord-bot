// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IHackathon,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for Hackathons.
 */
export class Hackathon extends DataAccessObject<IHackathon> implements IDataAccessObject<IHackathon> {
  /**
   * Creates a Hackathon in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @param {string} [name = 'Unnamed'] Name of the item.
   * @param {string} [theme = 'TBA'] Theme of the hackathon.
   * @param {Date} [start = new Date()] Start date of the hackathon.
   * @param {Date} [start = new Date()] End date of the hackathon.
   * @param {number} [participants = -1] Number of participants in the hackathon.
   * @param {number} [prizePool = -1] Total prize pool amount.
   * @param {string[]} [prizeIds = []] Unique identifier of the prizes in the hackathon.
   * @returns {IHackathon} The hackathon created.
   */
  async create(
    id: string,
    guildId: string,
    name = 'Unnamed',
    theme = 'TBA',
    start = new Date(0),
    end = new Date(0),
    participants = -1,
    prizePool = -1,
    prizeIds = [] as string[],
  ): Promise<IHackathon> {
    return this._create({
      id,
      guildId,
      name,
      theme,
      start,
      end,
      participants,
      prizePool,
      prizeIds,
    });
  }
}
