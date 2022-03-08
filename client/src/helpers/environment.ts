// Packages
import dotenv from 'dotenv';

// Local Imports
import {
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from '../config';

dotenv.config();

/**
 * Static methods for retrieving environment variables.
 */
export class Environment {
  /**
   * Returns API URL depending on environment.
   *
   * @returns {string} API URL.
   */
  static getApiUrl(): string {
    if (process.env.ENVIRONMENT === 'production') {
      return PRODUCTION_API_URL;
    }
    return DEVELOPMENT_API_URL;
  }
}
