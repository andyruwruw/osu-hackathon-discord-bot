/**
 * Error thrown when abstract Database is used.
 */
export class GenericDatabaseUsedError extends Error {
  constructor() {
    super('Attempted to connect to Generic Database.');
  }
}
