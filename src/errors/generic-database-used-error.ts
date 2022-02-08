/**
 * Abstract Database Class Used Error.
 */
export class GenericDatabaseUsedError extends Error {
  constructor() {
    super('Attempted to connect to Generic Database.');
  }
}
