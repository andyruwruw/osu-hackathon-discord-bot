// Local Imports
import { Database } from '../../../shared/database/database';
import { DiscordBot } from '../discord-bot';
import { UsedAbstractHandlerError } from '../errors/used-abstract-handler-error';

/**
 * Abstract handler class.
 */
export class Handler<T> {
  /**
   * Static reference to Discord bot client.
   */
  static _client: DiscordBot;

  /**
   * Static reference to database.
   */
  static _database: Database;

  /**
   * Sets static reference to Discord bot client.
   *
   * @param {DiscordBot} client Reference to Discord bot client.
   */
  static setClient(client: DiscordBot) {
    Handler._client = client;
  }

  /**
   * Sets static reference to database.
   *
   * @param {Database} database Reference to database.
   */
  static setDatabase(database: Database) {
    Handler._database = database;
  }

  /**
   * Handles the event.
   */
  execute(...args: T[]) {
    throw new UsedAbstractHandlerError();
  }
}
