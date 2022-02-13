// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Sets the announcements channel.
 */
export class SetAnnouncementsChannelCommand extends Command {
  /**
   * Instantiates a new SetAnnouncementsChannelCommand.
   */
  constructor() {
    super(
      'Set Announcements Channel',
      [
        'officer',
        'channel',
        'set',
        'officer-commands',
      ],
      'Sets the announcements channel.',
      APPLICATION_COMMAND_TYPES.HIDDEN,
      true,
    );
  }
}
