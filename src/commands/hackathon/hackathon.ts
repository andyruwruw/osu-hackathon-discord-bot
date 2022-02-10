// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { HackathonSeeNextCommand } from './see-next';
import { HackathonViewCommand } from './view';

/**
 * Subcommands of this command.
 */
const SUBCOMMANDS = [
  new HackathonSeeNextCommand(),
  new HackathonViewCommand(),
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
      'hackathon',
      'View past or upcoming hackathons.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      false,
      [],
      SUBCOMMANDS,
    );
  }
}
