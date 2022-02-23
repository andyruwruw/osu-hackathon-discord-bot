// Local Imports
import { Database as DatabaseClass } from './database';
import { CacheDatabase } from './cache-database';
import { MongoDatabase } from './mongo-database';
import { DATABASE_TYPES } from '../config';

/**
 * Generates database based on environmental variables.
 *
 * @returns {Database} The database.
 */
export const getDatabase = (databaseType: string): DatabaseClass => {
  if (databaseType === DATABASE_TYPES.MONGO) {
    return new MongoDatabase();
  }
  return new CacheDatabase();
};
