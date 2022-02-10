// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Gets details on a club member.
 */
export class MemberCommand extends Command {
  /**
   * Instantiates a new MemberCommand.
   */
  constructor() {
    super(
      'member',
      'Get details on a club member.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
