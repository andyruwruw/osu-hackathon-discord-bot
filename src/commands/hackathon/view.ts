// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Retrieves details on a previously held hackathon.
 */
export class HackathonViewCommand extends Command {
  /**
   * Instantiates a new HackathonViewCommand.
   */
  constructor() {
    super(
      'view',
      'Get details on a previous hackathon.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
