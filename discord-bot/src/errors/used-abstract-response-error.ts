// Local Imports
import { MESSAGE_USED_ABSTRACT_RESPONSE_ERROR } from '../config/messages';

/**
 * Abstract Response Class Used Error.
 */
export class UsedAbstractResponseError extends Error {
  constructor() {
    super(MESSAGE_USED_ABSTRACT_RESPONSE_ERROR);
  }
}
