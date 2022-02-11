// Local Imports
import { Database as DatabaseClass } from './database';
import { CacheDatabase } from './cache-database';
import { MongoDatabase } from './mongo-database';
import { DATABASE_TYPES } from '../config';
import { Environment } from '../helpers/environment';

/**
 * Generates database based on environmental variables.
 *
 * @returns {Database} The database.
 */
 export const getDatabase = (): DatabaseClass => {
  if (Environment.getDatabaseType() === DATABASE_TYPES.MONGO) {
    return new MongoDatabase();
  }
  return new CacheDatabase();
};

/**
 * Exported Active Database.
 */
export const Database = getDatabase();
