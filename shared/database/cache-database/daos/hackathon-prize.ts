// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IHackathonPrize,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for HackathonPrizes.
 */
export class HackathonPrize extends DataAccessObject<IHackathonPrize> implements IDataAccessObject<IHackathonPrize> {
  /**
   * Creates a HackathonPrize in the Database.
   *
   * @param {string} hackathon Id of Hackathon.
   * @param {string} prize Id of prize.
   * @returns {IHackathonPrize} The HackathonPrize created.
   */
  async create(
    hackathon: string,
    prize: string,
  ): Promise<IHackathonPrize> {
    return this._create({
      hackathon,
      prize,
    });
  }
}
