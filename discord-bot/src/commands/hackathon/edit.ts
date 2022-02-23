// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Edits a hackathon.
 */
export class EditHackathonCommand extends Command {
  /**
   * Instantiates a new EditHackathonCommand.
   */
  constructor() {
    super(
      'Edit Hackathon',
      'edit',
      'Edits a hackathon.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
    );
  }
}
