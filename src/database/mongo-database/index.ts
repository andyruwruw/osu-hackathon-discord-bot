// Packages
import mongoose from 'mongoose';

// Local Imports
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
   * Instantiates MongoDatabase with correct queries.
   */
  constructor() {
    super();
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
