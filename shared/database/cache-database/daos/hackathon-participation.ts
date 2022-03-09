// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IHackathonParticipation,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for HackathonParticipations.
 */
export class HackathonParticipation extends DataAccessObject<IHackathonParticipation> implements IDataAccessObject<IHackathonParticipation> {
  /**
   * Creates a HackathonParticipation in the Database.
   *
   * @param {string} hackathon Id of Hackathon.
   * @param {string} member Id of member.
   * @returns {IHackathonParticipation} The HackathonParticipation created.
   */
  async create(
    hackathon: string,
    member: string,
  ): Promise<IHackathonParticipation> {
    return this._create({
      hackathon,
      member,
    });
  }
}
