// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Retrieves details on the next hackathon.
 */
export class HackathonSeeNextCommand extends Command {
  /**
   * Instantiates a new HackathonSeeNextCommand.
   */
  constructor() {
    super(
      'see-next',
      'Get details on the next hackathon.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
