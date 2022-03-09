// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { CommandInteraction } from 'discord.js';

/**
 * Gets current user's profile.
 */
export class MeCommand extends Command {
  /**
   * Instantiates a new MeCommand.
   */
  constructor() {
    super(
      'Get My Profile',
      'me',
      'Get your own profile.',
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
