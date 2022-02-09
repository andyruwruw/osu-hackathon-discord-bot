// Packages
import mongoose from 'mongoose';

// Local Imports
import {
  Channel,
  Hackathon,
  Member,
  Message,
  Prize,
  Project,
  Role,
} from './daos';
import {
  Monitor,
  MonitorLayer,
} from '../../helpers/monitor';
import { Database } from '../database';
import { DatabaseUrlMissingError } from '../../errors';
import { Environment } from '../../helpers/environment';
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
  }

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    if (!Environment.getDatabaseUrl()) {
      throw new DatabaseUrlMissingError();
    }

    const authorizedUrl = Environment.getDatabaseUrl()
      .replace(
        '<user>',
        Environment.getDatabaseUser(),
      )
      .replace(
        '<password>',
        Environment.getDatabasePassword(),
      );
    await mongoose.connect(authorizedUrl);

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
    return mongoose.connection.readyState === 1;
  }
}
