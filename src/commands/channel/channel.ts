// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';
import { SetAnnouncementsChannelCommand } from './set-announcements-channel';
import { SetCommandsChannel } from './set-commands-channel';
import { SetOfficerCommandsChannelCommand } from './set-officer-commands-channel';
import { SetWelcomeChannel } from './set-welcome-channel';

/**
 * Subcommands of this command.
 */
const SUBCOMMANDS = [
  new SetAnnouncementsChannelCommand(),
  new SetCommandsChannel(),
  new SetOfficerCommandsChannelCommand(),
  new SetWelcomeChannel(),
];

/**
 * Subset of hackathon commands.
 */
export class ChannelCommand extends Command {
  /**
   * Instantiates a new ChannelCommand.
   */
  constructor() {
    super(
      'Channel Subset',
      'channel',
      'Designate certain channels.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
      [],
      SUBCOMMANDS,
    );
  }
}
