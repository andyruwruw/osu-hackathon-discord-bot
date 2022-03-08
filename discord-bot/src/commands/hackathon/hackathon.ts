// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';
import { HackathonSeeNextCommand } from './see-next';
import { HackathonViewCommand } from './view';
import { HackathonSubmissionsCommand } from './submissions';

/**
 * Subcommands of this command.
 */
const SUBCOMMANDS = [
  new HackathonSeeNextCommand(),
  new HackathonViewCommand(),
  new HackathonSubmissionsCommand(),
];

/**
 * Subset of hackathon commands.
 */
export class HackathonCommand extends Command {
  /**
   * Instantiates a new HackathonCommand.
   */
  constructor() {
    super(
      'Hackathon Subset',
      'hackathon',
      'View past or upcoming hackathons.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      false,
      [],
      SUBCOMMANDS,
    );
  }
}
