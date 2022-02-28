// Packages
import {
  Guild,
  Interaction,
  Message,
  ApplicationCommand,
  GuildResolvable,
} from 'discord.js';

// Local Import
import {
  Monitor,
  MonitorLayer,
} from '../helpers/monitor';
import { Command } from './command';
import { MESSAGE_COMMANDS_REGISTERED } from '../config/messages';
import { APPLICATION_COMMAND_TYPES } from '../config';

// Commands
import {
  MeCommand,
  MemberCommand,
} from './member';
import { HackathonCommand } from './hackathon';
import { HelpCommand } from './general';

// Types
import { IDiscordBot } from '../types';

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
   * @param {IDiscordBot} client The Discord.js client.
   */
  static async registerCommands(client: IDiscordBot): Promise<void> {
    try {
      const applicationCommands = await CommandManager._getApplicationRegisteredCommands(client);
      const guilds = Object.values(await client.getGuilds());
      const guildCommands = [] as Record<string, ApplicationCommand>[];
  
      for (let i = 0; i < guilds.length; i += 1) {
        const guild = guilds[i];
  
        // guildCommands.push(await CommandManager._getGuildRegisteredCommands(guild));
        const commands = await CommandManager._getGuildRegisteredCommands(guild);
        const keys = Object.keys(commands);

        for (let j = 0; j < keys.length; j += 1) {
          guild.commands.delete(keys[j]);
        }
      }
  
      // for (let i = 0; i < CommandManager._commands.length; i += 1) {
      //   let shouldCreateApplication = true;
      //   const command = CommandManager._commands[i];
  
      //   if (command.getKey() in applicationCommands) {
      //     if (CommandManager._applicationCommandMatches(
      //       applicationCommands[command.getKey()],
      //       command,
      //     )) {
      //       shouldCreateApplication = false;
      //     } else {
      //       await client.application.commands.delete(applicationCommands[command.getKey()].id);
      //     }
      //   }
  
      //   if (shouldCreateApplication) {
      //     await client.application.commands.create(command.createRegistration());
      //   }
  
      //   for (let j = 0; j < guilds.length; j += 1) {
      //     const guild = guilds[j];
      //     const commands = guildCommands[j];
  
      //     let shouldCreateGuild = true;
  
      //     if (command.getKey() in commands) {
      //       if (CommandManager._applicationCommandMatches(
      //         commands[command.getKey()],
      //         command,
      //       )) {
      //         shouldCreateGuild = false;
      //       } else {
      //         await guild.commands.delete(commands[command.getKey()].id);
      //       }
      //     }
  
      //     if (shouldCreateGuild) {
      //       await guild.commands.create(command.createRegistration());
      //     }
      //   }
      // }

      Monitor.log(
        CommandManager,
        MESSAGE_COMMANDS_REGISTERED,
        MonitorLayer.UPDATE,
      );
    } catch (error) {
      Monitor.log(
        CommandManager,
        error,
        MonitorLayer.WARNING,
      );
    }
  }

  /**
   * Retrieves commands previously registered with the client.
   *
   * @param {DiscordBot} client Discord.js client.
   * @returns {Promise<Record<string, ApplicationCommand>>} Commands registered.
   */
  static async _getApplicationRegisteredCommands(client: IDiscordBot): Promise<Record<string, ApplicationCommand>> {
    const applicationCommands = await client.application.commands.fetch();
    const items = applicationCommands.reduce((
      acc: ApplicationCommand<{ guild: GuildResolvable }>[],
      command: ApplicationCommand<{ guild: GuildResolvable }>,
    ) => {
      acc.push(command);
      return acc;
    }, [] as ApplicationCommand<{ guild: GuildResolvable }>[]);
    const commands = {} as Record<string, ApplicationCommand>;

    for (let i = 0; i < items.length; i += 1) {
      const command = items[i];
      commands[command.id] = command;
    }

    return commands;
  }

  /**
   * Retrieves commands previously registered with the guild.
   *
   * @param {Guild} guild 
   * @returns {Promise<Record<string, ApplicationCommand>>} Commands registered.
   */
  static async _getGuildRegisteredCommands(guild: Guild): Promise<Record<string, ApplicationCommand>> {
    const guildCommands = await guild.commands.fetch();
    const items = guildCommands.reduce((
      acc: ApplicationCommand<{}>[],
      command: ApplicationCommand<{}>,
    ) => {
      acc.push(command);
      return acc;
    }, [] as ApplicationCommand<{}>[]);
    const commands = {} as Record<string, ApplicationCommand>;

    for (let i = 0; i < items.length; i += 1) {
      const command = items[i];
      commands[command.id] = command;
    }

    return commands;
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
   * @param {IDiscordBot} client Discord.js client.
   * @param {ApplicationCommand} command 
   */
  static async _deleteApplicationCommand(
    client: IDiscordBot,
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
