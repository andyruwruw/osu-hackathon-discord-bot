// Packages
import {
  connect,
  connection,
} from 'mongoose';

// Local Imports
import {
  Channel,
  Hackathon,
  Member,
  Message,
  Prize,
  Project,
  Role,
  UserToken,
} from './daos';
import {
  Monitor,
  MonitorLayer,
} from '../../helpers/monitor';
import { Database } from '../database';
import { DatabaseUrlMissingError } from '../../errors/database-url-missing';
import { MESSAGE_DATABASE_CONNECTION_SUCCESS } from '../../config/messages';

/**
 * Database connection to MongoDB.
 */
export class MongoDatabase extends Database {
  /**
   * Data access object for Channels.
   */
  channel: Channel;

  /**
   * Data access object for Hackathons.
   */
  hackathon: Hackathon;

  /**
   * Data access object for Members.
   */
  member: Member;

  /**
   * Data access object for Messages.
   */
  message: Message;

  /**
   * Data access object for Prizes.
   */
  prize: Prize;

  /**
   * Data access object for Projects.
   */
  project: Project;

  /**
   * Data access object for Roles.
   */
  role: Role;

  /**
   * Data access object for UserTokens.
   */
  userToken: UserToken

  /**
   * Instantiates MongoDatabase with correct queries.
   */
  constructor() {
    super();

    this.channel = new Channel();
    this.hackathon = new Hackathon();
    this.member = new Member();
    this.message = new Message();
    this.prize = new Prize();
    this.project = new Project();
    this.role = new Role();
    this.userToken = new UserToken();
  }

  /**
   * Connects to database.
   */
  async connect(
    databaseUrl: string = '',
    databaseUser: string = '',
    databasePassword: string = '',
  ): Promise<void> {
    if (!databaseUrl) {
      throw new DatabaseUrlMissingError();
    }

    const authorizedUrl = databaseUrl
      .replace(
        '<user>',
        databaseUser,
      )
      .replace(
        '<password>',
        databasePassword,
      );
    await connect(authorizedUrl);

    Monitor.log(
      MongoDatabase,
      MESSAGE_DATABASE_CONNECTION_SUCCESS,
      MonitorLayer.UPDATE,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return connection.readyState === 1;
  }
}
