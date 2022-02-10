// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Gets details on the user.
 */
export class MeCommand extends Command {
  /**
   * Instantiates a new MemberCommand.
   */
  constructor() {
    super(
      'me',
      'Get your own details.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
