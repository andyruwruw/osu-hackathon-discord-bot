/**
 * Error thrown when abstract DataAccessObject is used.
 */
export class GenericDaoUsedError extends Error {
  constructor() {
    super('Attempted to use abstract Data Access Object. Please use a concrete implementation.');
  }
}
