// Packages
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Proxy for environment variables.
 */
export class Environment {
  /**
   * Whether to console.log Debug layer messages.
   *
   * @returns {boolean} Whether to console.log Debug layer messages.
   */
  static displayDebug(): boolean {
    return parseInt(process.env.DEBUG, 0) > 0;
  }

  /**
   * Whether to console.log Update layer messages.
   *
   * @returns {boolean} Whether to console.log Update layer messages.
   */
  static displayUpdate(): boolean {
    return parseInt(process.env.UPDATE, 0) > 0;
  }

  /**
   * Whether to console.log Warning layer messages.
   *
   * @returns {boolean} Whether to console.log Warning layer messages.
   */
  static displayWarning(): boolean {
    return parseInt(process.env.WARNING, 0) > 0;
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
   * Retrieves discord bot token, secret key.
   * 
   * @returns {string} Discord bot token.
   */
  static getDiscordBotToken(): string {
    return process.env.DISCORD_BOT_TOKEN;
  }
}
