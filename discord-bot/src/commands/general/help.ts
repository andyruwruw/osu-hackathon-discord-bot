// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';
import { CommandInteraction } from 'discord.js';
import { HelpResponse } from '../../responses/help-response';

/**
 * Lists available commands.
 */
export class HelpCommand extends Command {
  /**
   * Instantiates a new HelpCommand.
   */
  constructor() {
    super(
      'List Commands',
      'help',
      'Lists available commands.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
    );
  }

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    const response = new HelpResponse();
    interaction.reply(await response.create());
  }
}
