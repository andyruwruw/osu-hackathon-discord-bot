// Packages
import { Interaction } from 'discord.js';

// Local Imports
import { CommandManager } from '../commands';
import { Handler } from './handler';

/**
 * Handles discord.js interactionCreate event.
 */
export class InteractionCreateHandler extends Handler<Interaction> {
  /**
   * Handles the event.
   */
  execute(interaction: Interaction) {
    if (!interaction.isCommand()) {
      return;
    }

    CommandManager.handleInteraction(interaction);
  }
}
