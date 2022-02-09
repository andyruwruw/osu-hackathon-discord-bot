// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IProject,
  IDataAccessObject,
} from '../../../types';

/**
 * Data access object for Projects.
 */
export class Project extends DataAccessObject<IProject> implements IDataAccessObject<IProject> {
  /**
   * Instantiates a new Project DataAccessObject.
   */
  constructor() {
    super();
  }

  /**
   * Creates a Project in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guildId Unique identifier for the Discord server.
   * @returns {IProject} The Project created.
   */
   async create(
    id: string,
    guildId: string,
    hackathonId: string,
    name: 'Unnamed',
    description = '',
    imageUrl: string = '#',
    userIds: string[] = [],
    liveUrl: string = '#',
    demoUrl: string = '#',
    prizeId: string | null = null,
  ): Promise<IProject> {
    return await this._create({
      id,
      guildId,
      name, 
      description,
      hackathonId,
      imageUrl,
      userIds,
      liveUrl,
      demoUrl,
      prizeId,
    });
  }
}
