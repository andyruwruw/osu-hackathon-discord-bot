// Local Import
import { Command } from './command';

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
   */
  static registerCommands() {

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