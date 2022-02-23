// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Gets current user's profile.
 */
export class MeCommand extends Command {
  /**
   * Instantiates a new MeCommand.
   */
  constructor() {
    super(
      'Get My Profile',
      'me',
      'Get your own profile.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
