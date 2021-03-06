// Local Imports
import { CommandInteraction } from 'discord.js';
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Retrieves details on the next hackathon.
 */
export class HackathonSeeNextCommand extends Command {
  /**
   * Instantiates a new HackathonSeeNextCommand.
   */
  constructor() {
    super(
      'See Next Hackathon',
      'see-next',
      'Get details on the next hackathon.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    
  }
}
