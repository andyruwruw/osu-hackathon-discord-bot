// Local Imports
import { GenericDatabaseUsedError } from '../errors';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
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
