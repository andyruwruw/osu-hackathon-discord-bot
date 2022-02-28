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
  execute(client: Client) {
    Monitor.log(
      ReadyHandler,
      MESSAGE_READY,
      Monitor.Layer.UPDATE,
    );

    // Register slash commands.
    CommandManager.instantiateCommands();
    CommandManager.registerCommands(Handler._client);
  }
}
