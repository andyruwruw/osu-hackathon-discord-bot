// Local Imports
import {
  Monitor,
  MonitorLayer,
} from '../../helpers/monitor';
import { Database } from '../database';
import { MESSAGE_DATABASE_CACHE_CONNECTION_SUCCESS } from '../../config/messages';

/**
 * Non-persistant cache database for testing.
 */
export class CacheDatabase extends Database {
  /**
   * Instantiates CacheDatabase with correct queries.
   */
  constructor() {
    super();
  }

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    Monitor.log(
      CacheDatabase,
      MESSAGE_DATABASE_CACHE_CONNECTION_SUCCESS,
      MonitorLayer.UPDATE,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return true;
  }
}
