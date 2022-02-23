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
      'announce',
      'Announces a hackathon.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
    );
  }
}
