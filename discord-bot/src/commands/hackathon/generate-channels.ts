// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Generates hackathon category and channels.
 */
export class GenerateHackathonChannelsCommand extends Command {
  /**
   * Instantiates a new GenerateHackathonChannelsCommand.
   */
  constructor() {
    super(
      'Generate Hackathon Channels',
      'generate-channels',
      'Generates hackathon category and channels.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
    );
  }
}
