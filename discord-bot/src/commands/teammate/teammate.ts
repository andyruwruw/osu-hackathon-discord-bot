// Local Imports
import { CommandInteraction } from 'discord.js';
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';

/**
 * Subset of teammate commands.
 */
export class TeammateCommand extends Command {
  /**
   * Instantiates a new HelpCommand.
   */
  constructor() {
    super(
      'Teammate Commands',
      'teammate',
      'Helps you find a teammate!',
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
