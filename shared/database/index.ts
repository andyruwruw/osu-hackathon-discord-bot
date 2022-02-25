// Local Imports
import { Database as DatabaseClass } from './database';
import { CacheDatabase } from './cache-database';
import { MongoDatabase } from './mongo-database';
import { DATABASE_TYPES } from '../config';

/**
 * Static instance of the database.
 */
let DatabaseInstace = null;

/**
 * Generates database based on environmental variables.
 * 
 * @param {string} databaseType Type of database to generate.
 */
export const initializeDatabase = async (databaseType: string = 'cache') => {
  if (!DatabaseInstace) {
    if (databaseType === DATABASE_TYPES.MONGO) {
      DatabaseInstace = new MongoDatabase();
    }
    DatabaseInstace = new CacheDatabase();
  }
};

/**
 * Retrieves database based on environmental variables.
 *
 * @param {string} databaseType Type of database to generate.
 * @returns {Database} The database.
 */
export const getDatabase = (databaseType: string = 'cache'): DatabaseClass => {
  initializeDatabase(databaseType);

  return DatabaseInstace;  
};
