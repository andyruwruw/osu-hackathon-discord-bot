// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IDataAccessObject,
  IHackathon,
} from '../../../types';

/**
 * Data access object for Hackathons.
 */
export class Hackathon extends DataAccessObject<IHackathon> implements IDataAccessObject<IHackathon> {
  /**
   * Creates a Hackathon in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guild Unique identifier for the Discord server.
   * @param {string} [name = 'Unnamed'] Name of the item.
   * @param {string} [description = 'Unnamed'] Description of the item.
   * @param {string} [image = ''] Image of the item.
   * @param {string} [banner = ''] Banner image of the item.
   * @param {Date} [start = new Date()] Start date of the hackathon.
   * @param {string} [theme = 'TBA'] Theme of the hackathon.
   * @param {Date} [end = new Date()] End date of the hackathon.
   * @param {string} [href = ''] Href to hackathon site.
   * @param {number} [prizePool = -1] Total prize pool amount.
   * @returns {IHackathon} The hackathon created.
   */
  async create(
    id: string,
    guild: string,
    name = 'Unnamed',
    description: '',
    image: '',
    banner: '',
    theme = 'TBA',
    start = new Date(0),
    end = new Date(0),
    href = '',
    prizePool = -1,
  ): Promise<IHackathon> {
    return this._create({
      id,
      guild,
      name,
      description,
      image,
      banner,
      theme,
      start,
      end,
      href,
      prizePool,
    });
  }
}
