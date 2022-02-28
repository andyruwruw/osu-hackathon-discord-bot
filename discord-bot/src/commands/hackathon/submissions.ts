// Packages
import {
  ApplicationCommandChoicesData,
  ApplicationCommandOptionChoice,
  ApplicationCommandOptionData,
  Guild,
} from 'discord.js';

// Local Imports
import {
  APPLICATION_COMMAND_OPTION_TYPES,
  APPLICATION_COMMAND_TYPES,
} from '../../config';
import { Command } from '../command';
import { getDatabase } from '../../../../shared/database';

// Types
import { IHackathon } from '../../../../shared/types';
import { Monitor, MonitorLayer } from '../../../../shared/helpers/monitor';

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
export class HackathonSubmissionsCommand extends Command {
  /**
   * Instantiates a new HackathonSubmissionsCommand.
   */
  constructor() {
    super(
      'Hackathon Submissions',
      'submissions',
      'Show submissions from a hackathon.',
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
        HackathonSubmissionsCommand,
        error,
        MonitorLayer.WARNING,
      );
    }
    return false;
  }
}
