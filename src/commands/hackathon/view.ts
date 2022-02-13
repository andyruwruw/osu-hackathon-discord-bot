// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Retrieves details on a previously held hackathon.
 */
export class HackathonViewCommand extends Command {
  /**
   * Instantiates a new HackathonViewCommand.
   */
  constructor() {
    super(
      'View Hackathon',
      'view',
      'Get details on a previous hackathon.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }
}
