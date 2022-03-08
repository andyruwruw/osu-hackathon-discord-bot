// Packages
import { Client } from 'discord.js';

// Local Imports
import {
  MESSAGE_READY,
  MESSAGE_INVITE_LINK,
} from '../config/messages';
import { CommandManager } from '../commands';
import { Environment } from '../helpers/environment';
import { INVITE_LINK } from '../config';
import { Handler } from './handler';
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

      Monitor.log(
        ReadyHandler,
        MESSAGE_INVITE_LINK(INVITE_LINK(Environment.getDiscordApplicationId())),
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

export const ReadyHandlerInstance = new ReadyHandler();
