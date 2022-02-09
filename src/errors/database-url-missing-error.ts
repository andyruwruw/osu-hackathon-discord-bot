/**
 * Error thrown when Database URL is missing.
 */
export class DatabaseUrlMissingError extends Error {
  constructor() {
    super('Database URL not set in .env!');
  }
}
