// Packages
import { Interaction } from 'discord.js';

// Local Imports
import { CommandManager } from '../commands';
import { Handler } from './handler';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js interactionCreate event.
 */
export class InteractionCreateHandler extends Handler<Interaction> {
  /**
   * Handles the event.
   */
  async execute(interaction: Interaction) {
    try {
      if (!interaction.isCommand()) {
        return;
      }
  
      await CommandManager.handleInteraction(interaction);
    } catch (error) {
      Monitor.log(
        InteractionCreateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
