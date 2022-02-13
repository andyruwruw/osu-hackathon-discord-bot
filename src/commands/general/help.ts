// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Lists available commands.
 */
export class HelpCommand extends Command {
  /**
   * Instantiates a new HelpCommand.
   */
  constructor() {
    super(
      'List Commands',
      'help',
      'Lists available commands.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
