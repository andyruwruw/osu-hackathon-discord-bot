// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IRole,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for Roles.
 */
export class Role extends DataAccessObject<IRole> implements IDataAccessObject<IRole> {
  /**
   * Creates a Role in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @returns {IRole} The Role created.
   */
  async create(
    id: string,
    guildId: string,
    name = 'Unnamed',
    color = '#FF8000',
    isOfficer = false,
    isPresident = false,
    isVicePresident = false,
    isParticipant = false,
    participantSeasonIndex = 0,
    isOverallPrizeWinner = false,
    isNewStudentPrizeWinner = false,
    isGradStudentAlumniPrizeWinner = false,
    prizeIndex = 0,
    isPronouns = false,
    pronounType = 'Ask',
  ): Promise<IRole> {
    return this._create({
      id,
      guildId,
      name,
      color,
      isOfficer,
      isPresident,
      isVicePresident,
      isParticipant,
      participantSeasonIndex,
      isOverallPrizeWinner,
      isNewStudentPrizeWinner,
      isGradStudentAlumniPrizeWinner,
      prizeIndex,
      isPronouns,
      pronounType,
    });
  }
}
