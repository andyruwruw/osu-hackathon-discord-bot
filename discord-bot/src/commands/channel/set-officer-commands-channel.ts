// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Sets the officer commands channel.
 */
export class SetOfficerCommandsChannelCommand extends Command {
  /**
   * Instantiates a new SetOfficerCommandsChannelCommand.
   */
  constructor() {
    super(
      'Set Officer Commands Channel',
      'set-officer-commands',
      'Sets the officer commands channel.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
    );
  }
}
