// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IProjectParticipation,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for ProjectParticipations.
 */
export class ProjectParticipation extends DataAccessObject<IProjectParticipation> implements IDataAccessObject<IProjectParticipation> {
  /**
   * Creates a ProjectParticipation in the Database.
   *
   * @param {string} project Id of Project.
   * @param {string} member Id of member.
   * @returns {IProjectParticipation} The ProjectParticipation created.
   */
  async create(
    project: string,
    member: string,
  ): Promise<IProjectParticipation> {
    return this._create({
      project,
      member,
    });
  }
}
