/**
 * Database URL Not Set Error.
 */
export class DatabaseUrlMissingError extends Error {
  constructor() {
    super('Database URL not set in .env!');
  }
}
