// Packages
import dotenv from 'dotenv';

// Local Imports
import {
  DEVELOPMENT_URL,
  PRODUCTION_URL,
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
   * Retreives Discord Client Secret.
   *
   * @returns {string} Discord client Secret.
   */
  static getDiscordClientSecret(): string {
    return process.env.DISCORD_CLIENT_SECRET || '';
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
      return `${PRODUCTION_URL}/callback`;
    }
    return `${DEVELOPMENT_URL}/callback`;
  }

  /**
   * Returns origin URL depending on environment.
   *
   * @returns {string} Origin URL.
   */
  static getOrigin(): string {
    if (process.env.ENVIRONMENT === 'production') {
      return PRODUCTION_URL;
    }
    return DEVELOPMENT_URL;
  }

  /**
   * Retrieves server secret.
   *
   * @returns {string} Server secret.
   */
   static getSecret(): string {
    return process.env.SECRET || 'this_is_not_secret';
  }
}
