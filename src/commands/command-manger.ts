// Packages
import {
  Client,
  Guild,
  Interaction,
  Message,
  ApplicationCommand,
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
import { ChannelCommand } from './channel';
import { HackathonCommand } from './hackathon';
import { HelpCommand } from './general';
import { CreateRoleAssignerCommand } from './message';
import { RoleCommand } from './role';
import { OfficerPermissions } from '../permissions';

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
    // Channel Commands
    CommandManager._commands.push(new ChannelCommand());
    // General Commands
    CommandManager._commands.push(new HelpCommand());
    // Hackathon Commands
    CommandManager._commands.push(new HackathonCommand());
    // Member Commands
    CommandManager._commands.push(new MeCommand());
    CommandManager._commands.push(new MemberCommand());
    // Message Commands
    CommandManager._commands.push(new CreateRoleAssignerCommand());
    // Role Commands
    CommandManager._commands.push(new RoleCommand());
  }

  /**
   * Registers slash commands with Discord.
   * 
   * @param {IDiscordBot} client The Discord.js client.
   */
  static async registerCommands(client: IDiscordBot): Promise<void> {
    console.log('generating commands');
    const applicationCommands = await CommandManager._getApplicationRegisteredCommands(client);
    const guilds = Object.values(client.getGuilds());
    const guildCommands = [] as Record<string, ApplicationCommand>[];

    console.log(guilds.length);

    for (let i = 0; i < guilds.length; i += 1) {
      const guild = guilds[i];

      guildCommands.push(await CommandManager._getGuildRegisteredCommands(guild));
    }

    console.log(CommandManager._commands.length);

    for (let i = 0; i < CommandManager._commands.length; i += 1) {
      let shouldCreateApplication = true;
      const command = CommandManager._commands[i];
      console.log(`command ${command.getKey()}`);

      if (command.getKey() in applicationCommands) {
        if (CommandManager._applicationCommandMatches(
          applicationCommands[command.getKey()],
          command,
        )) {
          shouldCreateApplication = false;
        } else {
          await client.application.commands.delete(command.getKey());
        }
      }

      if (shouldCreateApplication) {
        await client.application.commands.create(command.createRegistration());
      }

      console.log(`going through guilds ${guilds.length}`);

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
            await guild.commands.delete(command.getKey());
          }
        }

        if (shouldCreateGuild) {
          const createdCommand = await guild.commands.create(command.createRegistration());

          if (command.isRestricted()) {
            await guild.commands.permissions.add({
              command: createdCommand.id,
              permissions: [
                (new OfficerPermissions()).createPermissions(),
              ],
            });
          }
        }
      }
    }

    Monitor.log(
      CommandManager,
      MESSAGE_COMMANDS_REGISTERED,
      MonitorLayer.UPDATE,
    );
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
   * Retrieves commands previously registered with the client.
   *
   * @param {CliIDiscordBotent} client Discord.js client.
   * @returns {Promise<Record<string, ApplicationCommand>>} Commands registered.
   */
  static async _getApplicationRegisteredCommands(client: IDiscordBot): Promise<Record<string, ApplicationCommand>> {
    const items = Object.entries(await client.application.commands.fetch());
    const commands = {} as Record<string, ApplicationCommand>;

    for (let i = 0; i < items.length; i += 1) {
      const command = items[i][1];
      commands[command.name] = command;
    }

    return commands;
  }

  /**
   * Retrieves commands previously registered with the guild.
   *
   * @param {Guild} guild 
   * @returns {Promise<Record<string, ApplicationCommand>>} Commands registered.
   */
  static _getGuildRegisteredCommands(guild: Guild): Promise<Record<string, ApplicationCommand>> {
    return guild.commands.fetch() as unknown as Promise<Record<string, ApplicationCommand>>;
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
