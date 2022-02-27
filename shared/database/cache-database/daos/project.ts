// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  IDataAccessObject,
  IProject,
} from '../../../types';

/**
 * Data access object for Projects.
 */
export class Project extends DataAccessObject<IProject> implements IDataAccessObject<IProject> {
  /**
   * Creates a Project in the Database.
   *
   * @param {string} id Unique identifier for the item, use Discord ID when available.
   * @param {string} guild Unique identifier for the Discord server.
   * @param {string} hackathon Unique identifier for the hackathon.
   * @param {string} name Name of the project.
   * @param {string} description Description of the project.
   * @param {string} image Image of the project.
   * @param {string} href Link to project's page.
   * @param {string} live Link to live site.
   * @param {string} demo Link to demo.
   * @param {string} github Link to repository.
   * @param {string} prize Id of prize awarded.
   * @returns {IProject} The Project created.
   */
  async create(
    id: string,
    guild: string,
    hackathon: string,
    name: 'Unnamed',
    description = '',
    image = '',
    href = '',
    live = '',
    demo = '',
    github = '',
    prize = '',
  ): Promise<IProject> {
    return this._create({
      id,
      guild,
      name, 
      description,
      hackathon,
      image,
      href,
      live,
      demo,
      github,
      prize,
    });
  }
}
