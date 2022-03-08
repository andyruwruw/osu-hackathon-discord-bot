/**
 * The CommandManager ensures commands are properly registered
 * and updated, as well as routing incoming interactions to 
 * the correct commands for handling.
 * 
 * It's the main facade to all commands. 
 */

// Packages
import {
  Guild,
  Interaction,
  Message,
  ApplicationCommand,
} from 'discord.js';

// Local Import
import {
  MESSAGE_COMMANDS_REGISTERED,
  MESSAGE_COMMANDS_REGISTER_START,
  MESSAGE_COMMANDS_UPDATE,
} from '../config/messages';
import { APPLICATION_COMMAND_TYPES } from '../config';
import { Command } from './command';
import { DiscordBot } from '../discord-bot';
import { getApplicationRegisteredCommandsAsHashmap } from '../helpers/discord-data';
import { sleep } from '../helpers/sleep';

// Commands
import {
  MeCommand,
  MemberCommand,
} from './member';
import { HackathonCommand } from './hackathon';
import { HelpCommand } from './general';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Manages all commands and routes interactions to correct command.
 */
export class CommandManager {
  /**
   * Static list of commands to be registered.
   */
  static _commands: Command[] = [];

  /**
   * Fills command lists with commands.
   */
  static instantiateCommands() {
    // General Commands
    CommandManager._commands.push(new HelpCommand());
    // Hackathon Commands
    CommandManager._commands.push(new HackathonCommand());
    // Member Commands
    CommandManager._commands.push(new MeCommand());
    CommandManager._commands.push(new MemberCommand());
  }

  /**
   * Handle an incoming interaction.
   *
   * @param {Interaction} interaction Interaction to check.
   */
  static async handleInteraction(interaction: Interaction): Promise<void> {
    if (!interaction.isCommand()) {
      return;
    }

    console.log(interaction.command);
    console.log(interaction.commandId);
    console.log(interaction.commandName);

    interaction.reply('interaction reply');
  }

  /**
   * Handle a message being sent.
   *
   * @param {Message} message The message to check.
   */
  static handleMessage(message: Message): void {
    console.log(message);
  }

  /**
   * Registers slash commands with Discord.
   * 
   * @param {DiscordBot} client The Discord.js client.
   */
  static async registerCommands(client: DiscordBot): Promise<void> {
    try {
      Monitor.log(
        CommandManager,
        MESSAGE_COMMANDS_REGISTER_START,
        Monitor.Layer.UPDATE,
      );

      const applicationCommands = await getApplicationRegisteredCommandsAsHashmap(client);
  
      for (let i = 0; i < CommandManager._commands.length; i += 1) {
        await sleep(500);

        const command = CommandManager._commands[i];
        let shouldCreateApplication = true;
  
        if (command.getKey() in applicationCommands) {
          if (CommandManager._applicationCommandMatches(
            applicationCommands[command.getKey()],
            command,
          )) {
            shouldCreateApplication = false;
          } else {
            Monitor.log(
              CommandManager,
              MESSAGE_COMMANDS_UPDATE(applicationCommands[command.getKey()].id),
              Monitor.Layer.DEBUG,
            );
            await client.application.commands.delete(applicationCommands[command.getKey()].id);
          }
        }
  
        if (shouldCreateApplication) {
          await client.application.commands.create(command.createRegistration());
        }
      }

      Monitor.log(
        CommandManager,
        MESSAGE_COMMANDS_REGISTERED,
        Monitor.Layer.UPDATE,
      );
    } catch (error) {
      Monitor.log(
        CommandManager,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }

  /**
   * Whether an application command and command are the same.
   *
   * @param {ApplicationCommand} applicationCommand Application command in question.
   * @param {Command} command Command in question.
   * @returns {boolean} Whether the commands are the same.
   */
  static _applicationCommandMatches(
    applicationCommand: ApplicationCommand,
    command: Command,
  ): boolean {
    if (command.getType() === APPLICATION_COMMAND_TYPES.HIDDEN) {
      return false;
    }

    return applicationCommand.name === command.getKey()
      && applicationCommand.description === command.getDescription();
  }

  /**
   * Deletes an application command.
   *
   * @param {DiscordBot} client Discord.js client.
   * @param {ApplicationCommand} command 
   */
  static async _deleteApplicationCommand(
    client: DiscordBot,
    command: ApplicationCommand,
  ): Promise<void> {
    await client.application.commands.delete(command.id);
  }

  /**
   * Deletes a guild command.
   *
   * @param {Guild} guild Guild in question.
   * @param {ApplicationCommand} command Command in question.
   */
  static async _deleteGuildCommand(
    guild: Guild,
    command: ApplicationCommand,
  ): Promise<void> {
    await guild.commands.delete(command.id);
  }
}
