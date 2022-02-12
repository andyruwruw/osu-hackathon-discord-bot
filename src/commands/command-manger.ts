// Packages
import {
  Client,
  Interaction,
  Message,
} from 'discord.js';

// Local Import
import {
  Monitor,
  MonitorLayer,
} from '../helpers/monitor';
import { Command } from './command';
import { MESSAGE_COMMANDS_REGISTERED } from '../config/messages';

/**
 * Manages all commands and routes interactions to correct command.
 */
export class CommandManager {
  /**
   * List of registered slash commands
   */
  static _registeredCommands: Command[] = [];

  /**
   * List of unregistered text commands.
   */
  static _unregisterdCommands: Command[] = [];

  /**
   * Fills command lists with commands.
   */
  static instantiateCommands() {
  }

  /**
   * Registers slash commands with Discord.
   * 
   * @param {Client} client The discord.js client.
   */
  static registerCommands(client: Client): void {
    for (let i = 0; i < CommandManager._registeredCommands.length; i += 1) {
      const command = CommandManager._registeredCommands[i].createRegistration();

      if ('application' in client) {
        client.application.commands.create(command);
      }

      if ('guilds' in client) {
        client.guilds.cache.forEach((guild) => {
          guild.commands.create(command);
        });
      }
    }

    Monitor.log(
      CommandManager,
      MESSAGE_COMMANDS_REGISTERED,
      MonitorLayer.UPDATE,
    );
  }

  static handleInteraction(interaction: Interaction): void {
  }

  static handleMessage(message: Message): void {
  }

  /**
   * Adds a command to the correct list.
   *
   * @param {Command} command A command to add.
   */
  static _addCommand(command: Command): void {
    if (command.getType() === 4) {
      CommandManager._unregisterdCommands.push(command);
    } else {
      CommandManager._registeredCommands.push(command);
    }
  }
}
