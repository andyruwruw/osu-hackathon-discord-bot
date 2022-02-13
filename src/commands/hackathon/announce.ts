// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Announces a hackathon.
 */
export class AnnounceHackathonCommand extends Command {
  /**
   * Instantiates a new AnnounceHackathonCommand.
   */
  constructor() {
    super(
      'Announce Hackathon',
      [
        'officer',
        'hackathon',
        'announce',
      ],
      'Announces a hackathon.',
      APPLICATION_COMMAND_TYPES.HIDDEN,
      true,
    );
  }
}
