// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Sets the welcome channel.
 */
export class SetWelcomeChannel extends Command {
  /**
   * Instantiates a new SetWelcomeChannel.
   */
  constructor() {
    super(
      'Set General Command Channel',
      [
        'officer',
        'channel',
        'set',
        'welcome',
      ],
      'Sets the welcome channel.',
      APPLICATION_COMMAND_TYPES.HIDDEN,
      true,
    );
  }
}