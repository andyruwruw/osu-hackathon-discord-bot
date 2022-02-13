// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Sets the welcome channel.
 */
export class SetWelcomeChannel extends Command {
  /**
   * Instantiates a new SetWelcomeChannel.
   */
  constructor() {
    super(
      'Set General Command Channel',
      'set-welcome',
      'Sets the welcome channel.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
    );
  }
}