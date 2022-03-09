// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { Environment } from '../helpers/environment';
import { getDatabase } from '../../../shared/database';
import { Database } from '../../../shared/database/database';

/**
 * Abstract handler class.
 */
export class Handler {
  /**
   * Database instance.
   */
  _database: Database;

  /**
   * Whether the handler is ready to execute.
   */
  _ready: boolean;

  /**
   * Instantiates a new handler.
   */
  constructor() {
    this._database = getDatabase(Environment.getDatabaseType());
    this._connectDatabase();
  }

  /**
   * Handles the request.
   *
   * @param {VercelRequest} req Incoming request.
   * @param {VercelResponse} res Outgoing response.
   */
  async execute(
    req: VercelRequest,
    res: VercelResponse,
  ): Promise<void> {
  }

  /**
   * Connects to the database.
   */
  async _connectDatabase(): Promise<void> {
    await this._database.connect(
      Environment.getDatabaseUrl(),
      Environment.getDatabaseUser(),
      Environment.getDatabasePassword(),
    );

    this._ready = true;
  }
}