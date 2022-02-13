// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Creates a hackathon.
 */
export class CreateHackathonCommand extends Command {
  /**
   * Instantiates a new CreateHackathonCommand.
   */
  constructor() {
    super(
      'Create Hackathon',
      [
        'officer',
        'hackathon',
        'create',
      ],
      'Creates a hackathon.',
      APPLICATION_COMMAND_TYPES.HIDDEN,
      true,
    );
  }
}
