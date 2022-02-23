// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Sets the commands channel.
 */
export class SetCommandsChannel extends Command {
  /**
   * Instantiates a new SetCommandsChannel.
   */
  constructor() {
    super(
      'Set General Command Channel',
      'set-general-commands',
      'Sets the commands channel.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
    );
  }
}
