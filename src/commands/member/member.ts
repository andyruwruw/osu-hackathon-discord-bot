// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Gets a club member's profile.
 */
export class MemberCommand extends Command {
  /**
   * Instantiates a new MemberCommand.
   */
  constructor() {
    super(
      'Get Member Profile',
      'member',
      'Get a club member\'s profile',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
