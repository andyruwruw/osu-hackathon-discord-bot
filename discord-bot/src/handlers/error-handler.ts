// Local Imports
import { Monitor } from '../../../shared/helpers/monitor';
import { Handler } from './handler';

/**
 * Handles discord.js error event.
 */
export class ErrorHandler extends Handler<Error> {
  /**
   * Handles the event.
   */
  execute(error: Error) {
    Monitor.log(
      ErrorHandler,
      error.message,
      Monitor.Layer.WARNING,
    );
  }
}
