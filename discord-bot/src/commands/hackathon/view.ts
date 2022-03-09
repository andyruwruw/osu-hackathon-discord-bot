// Packages
import {
  ApplicationCommandChoicesData,
  ApplicationCommandOptionChoice,
  ApplicationCommandOptionData,
  Guild,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import {
  APPLICATION_COMMAND_OPTION_TYPES,
  APPLICATION_COMMAND_TYPES,
} from '../../config';
import { Command } from '../command';
import { getDatabase } from '../../../../shared/database';
import { Monitor } from '../../../../shared/helpers/monitor';

// Types
import { IHackathon } from '../../../../shared/types';

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

  async updateChoices(guild: Guild): Promise<boolean> {
    try {
      const choices = await getDatabase().hackathon.find({
        guild: guild.id,
      });
  
      (this._options[0] as ApplicationCommandChoicesData).choices = choices.map((hackathon: IHackathon) => ({
        name: hackathon.name,
        value: hackathon.id,
      })) as ApplicationCommandOptionChoice[];
  
      return true;
    } catch (error) {
      Monitor.log(
        HackathonViewCommand,
        error,
        Monitor.Layer.WARNING,
      );
    }
    return false;
  }

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    
  }
}
