// Packages
import { Client } from 'discord.js';

// Local Imports
import { CommandManager } from '../commands';
import { Handler } from './handler';
import { MESSAGE_READY } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js ready event.
 */
export class ReadyHandler extends Handler<Client> {
  /**
   * Handles the event.
   */
  async execute(client: Client) {
    try {
      Monitor.log(
        ReadyHandler,
        MESSAGE_READY,
        Monitor.Layer.UPDATE,
      );
  
      // Register slash commands.
      CommandManager.instantiateCommands();
      await CommandManager.registerCommands(Handler._client);
    } catch (error) {
      Monitor.log(
        ReadyHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
