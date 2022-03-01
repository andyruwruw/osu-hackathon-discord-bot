// Local Imports
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js error event.
 */
export class ErrorHandler extends Handler<Error> {
  /**
   * Handles the event.
   */
  async execute(error: Error) {
    try {
      Monitor.log(
        ErrorHandler,
        error.message,
        Monitor.Layer.WARNING,
      );
    } catch (error) {
      Monitor.log(
        ErrorHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
