// Packages
import dotenv from 'dotenv';

// Local Imports
import {
  DEVELOPMENT_REDIRECT_URL,
  PRODUCTION_REDIRECT_URL,
} from '../config';

dotenv.config();

/**
 * Static methods for retrieving environment variables.
 */
export class Environment {
  /**
   * Retreives Discord Client ID.
   *
   * @returns {string} Discord client ID.
   */
  static getDiscordClientId(): string {
    return process.env.DISCORD_CLIENT_ID || '';
  }

  /**
   * Retreives authorization state.
   *
   * @returns {string} Authorization state.
   */
  static getState(): string {
    return process.env.STATE || '123456789';
  }

  /**
   * Retrieves password for connecting with database if needed.
   * 
   * @returns {string} Password for connecting with database if needed.
   */
   static getDatabasePassword(): string {
    return process.env.DATABASE_PASSWORD as string || '';
  }

  /**
   * Retrieves type of database to use.
   *
   * @returns {string} Type of database to use.
   */
  static getDatabaseType(): string {
    return process.env.DATABASE_TYPE || 'cache';
  }

  /**
   * Retrieves URL for connecting with database if needed.
   *
   * @returns {string} URL for connecting with database if needed.
   */
  static getDatabaseUrl(): string {
    return process.env.DATABASE_URL as string || 'mongodb://localhost:27017/';
  }

  /**
   * Retrieves username for connecting with database if needed.
   * 
   * @returns {string} Username for connecting with database if needed.
   */
  static getDatabaseUser(): string {
    return process.env.DATABASE_USER as string || '';
  }

  /**
   * Returns a authorization redirect URL depending on environment.
   *
   * @returns {string} Authorization redirect URL.
   */
  static getRedirectUrl(): string {
    if (process.env.ENVIRONMENT === 'production') {
      return PRODUCTION_REDIRECT_URL;
    }
    return DEVELOPMENT_REDIRECT_URL;
  }
}
