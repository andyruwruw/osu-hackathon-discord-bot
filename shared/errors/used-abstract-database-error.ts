// Local Imports
import { MESSAGE_USED_ABSTRACT_DATABASE_ERROR } from '../config/messages';

/**
 * Abstract Database Class Used Error.
 */
export class UsedAbstractDatabaseError extends Error {
  constructor() {
    super(MESSAGE_USED_ABSTRACT_DATABASE_ERROR);
  }
}