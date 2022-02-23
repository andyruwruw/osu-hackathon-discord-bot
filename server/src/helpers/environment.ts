// Packages
import dotenv from 'dotenv';

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
    return process.env.DISCORD_CLIENT_ID;
  }

  /**
   * Retreives authorization state.
   *
   * @returns {string} Authorization state.
   */
  static getState(): string {
    return process.env.STATE;
  }
}
