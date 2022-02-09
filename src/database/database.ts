// Local Imports
import { GenericDatabaseUsedError } from '../errors';

// Types
import {
  IChannel,
  IDataAccessObject,
  IHackathon,
  IMember,
  IMessage,
  IPrize,
  IProject,
  IRole,
} from '../types';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for Channels.
   */
  channel: IDataAccessObject<IChannel> = null;

  /**
   * Data access object for Hackathons.
   */
  hackathon: IDataAccessObject<IHackathon> = null;

  /**
   * Data access object for Members.
   */
  member: IDataAccessObject<IMember> = null;

  /**
   * Data access object for Messages.
   */
  message: IDataAccessObject<IMessage> = null;

  /**
   * Data access object for Prizes.
   */
  prize: IDataAccessObject<IPrize> = null;
 
  /**
   * Data access object for Projects.
   */
  project: IDataAccessObject<IProject> = null;
 
  /**
   * Data access object for Roles.
   */
  role: IDataAccessObject<IRole> = null;

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    throw new GenericDatabaseUsedError();
  }

  /**
   * Whether or not the database is connected.
   * 
   * @returns {boolean} Whether or not the database is connected.
   */
  isConnected(): boolean {
    return false;
  }
}
