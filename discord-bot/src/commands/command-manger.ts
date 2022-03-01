// Packages
import {
  Guild,
  Interaction,
  Message,
  ApplicationCommand,
} from 'discord.js';

// Local Import
import {
  getApplicationRegisteredCommandsAsHashmap,
  getClientGuilds,
  getGuildRegisteredCommandsAsHashmap,
} from '../helpers/discord-data';
import { APPLICATION_COMMAND_TYPES } from '../config';
import { Command } from './command';
import { DiscordBot } from '../discord-bot';
import { MESSAGE_COMMANDS_REGISTERED } from '../config/messages';

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
  static handleInteraction(interaction: Interaction): void {
    console.log('interaction', interaction);
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
      const applicationCommands = await getApplicationRegisteredCommandsAsHashmap(client);
      const guilds = await getClientGuilds(client);
      const guildCommands = [] as Record<string, ApplicationCommand>[];
  
      for (let i = 0; i < guilds.length; i += 1) {
        const guild = guilds[i];
  
        guildCommands.push(await getGuildRegisteredCommandsAsHashmap(guild));
      }
  
      for (let i = 0; i < CommandManager._commands.length; i += 1) {
        let shouldCreateApplication = true;
        const command = CommandManager._commands[i];
  
        if (command.getKey() in applicationCommands) {
          if (CommandManager._applicationCommandMatches(
            applicationCommands[command.getKey()],
            command,
          )) {
            shouldCreateApplication = false;
          } else {
            await client.application.commands.delete(applicationCommands[command.getKey()].id);
          }
        }
  
        if (shouldCreateApplication) {
          await client.application.commands.create(command.createRegistration());
        }
  
        for (let j = 0; j < guilds.length; j += 1) {
          const guild = guilds[j];
          const commands = guildCommands[j];
  
          let shouldCreateGuild = true;
  
          if (command.getKey() in commands) {
            if (CommandManager._applicationCommandMatches(
              commands[command.getKey()],
              command,
            )) {
              shouldCreateGuild = false;
            } else {
              await guild.commands.delete(commands[command.getKey()].id);
            }
          }
  
          if (shouldCreateGuild) {
            await guild.commands.create(command.createRegistration());
          }
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
      && applicationCommand.description === command.getDescription()
      && (
        (applicationCommand.type === 'CHAT_INPUT' && command.getType() === APPLICATION_COMMAND_TYPES.CHAT_INPUT)
        || (applicationCommand.type === 'USER' && command.getType() === APPLICATION_COMMAND_TYPES.USER)
        || (applicationCommand.type === 'MESSAGE' && command.getType() === APPLICATION_COMMAND_TYPES.MESSAGE)
      );
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
