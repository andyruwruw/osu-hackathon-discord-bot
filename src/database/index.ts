// Local Imports
import { Database } from './database';
import { CacheDatabase } from './cache-database';
import { MongoDatabase } from './mongo-database';
import { DATABASE_TYPES } from '../config';
import { Environment } from '../helpers/environment';

/**
 * Exported Generic Database class.
 */
export { Database } from './database';

/**
 * Generates database based on environmental variables.
 *
 * @returns {Database} The database.
 */
export const getDatabase = (): Database => {
  if (Environment.getDatabaseType() === DATABASE_TYPES.MONGO) {
    return new MongoDatabase();
  }
  return new CacheDatabase();
};
