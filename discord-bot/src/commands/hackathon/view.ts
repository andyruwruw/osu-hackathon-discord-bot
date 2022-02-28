// Packages
import { ApplicationCommandOptionData } from 'discord.js';

// Local Imports
import {
  APPLICATION_COMMAND_OPTION_TYPES,
  APPLICATION_COMMAND_TYPES,
} from '../../config';
import { Command } from '../command';

const OPTIONS = [
  {
    type: APPLICATION_COMMAND_OPTION_TYPES.STRING,
    name: 'hackathon',
    description: 'The hackathon to view.',
    required: true,
    choices: [],
  },
] as ApplicationCommandOptionData[];

/**
 * Retrieves details on a previously held hackathon.
 */
export class HackathonViewCommand extends Command {
  /**
   * Instantiates a new HackathonViewCommand.
   */
  constructor() {
    super(
      'View Hackathon',
      'view',
      'Get details on a previous hackathon.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      false,
      OPTIONS,
    );
  }
}
