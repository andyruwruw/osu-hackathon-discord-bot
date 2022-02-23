// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';
import { AnnounceHackathonCommand } from './announce';
import { CreateHackathonCommand } from './create';
import { EditHackathonCommand } from './edit';
import { GenerateHackathonChannelsCommand } from './generate-channels';
import { HackathonSeeNextCommand } from './see-next';
import { HackathonViewCommand } from './view';

/**
 * Subcommands of this command.
 */
const SUBCOMMANDS = [
  new AnnounceHackathonCommand(),
  new CreateHackathonCommand(),
  new EditHackathonCommand(),
  new GenerateHackathonChannelsCommand(),
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
