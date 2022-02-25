// Packages
import {
  Client as DiscordClient,
  ClientOptions,
  Guild,
  GuildMember,
  Interaction,
  Message,
  MessageReaction,
  PartialGuildMember,
  PartialMessageReaction,
  PartialUser,
  Role,
  User,
} from 'discord.js';

// Local Imports
import {
  Monitor,
  MonitorLayer,
} from './helpers/monitor';
import { MESSAGE_READY } from './config/messages';
import { CommandManager } from './commands';
import { getDatabase } from '../../shared/database';

// Types
import { IDiscordBot } from './types';

/**
 * Discord Bot extends discord.js Client.
 */
export class DiscordBot extends DiscordClient implements IDiscordBot {
  /**
   * Instantiates a new Discord bot.
   *
   * @param {ClientOptions} options Options for the client.
   */
  constructor(options: ClientOptions) {
    super(options);

    this._setEventHandlers();
    this._connectToDatabase();
  }

  /**
   * Retrives the guilds the client is apart of.
   *
   * @returns {Promise<Record<string, Guild>>} Commands registered.
   */
  async getGuilds(): Promise<Record<string, Guild>> {
    const oAuth2GUilds = Object.values(await this.guilds.fetch());
    const guilds = {} as Record<string, Guild>;

    for (let i = 0; i < oAuth2GUilds.length; i += 1) {
      const guild = await this.guilds.fetch({
        guild: oAuth2GUilds[i].id,
      });

      guilds[guild.id] = guild;
    }

    return guilds;
  }

  /**
   * Sets event handlers for the Discord bot.
   */
  _setEventHandlers(): void {
    this.on('ready', () => this._handleReady());
    this.on('error', (error: Error) => this._handleError(error));
    this.on('interactionCreate', (interaction: Interaction) => this._handleInteraction(interaction));
    this.on('messageCreate', (message: Message) => this._handleMessageCreate(message));
    this.on('guildMemberAdd', (member: GuildMember) => this._handleGuildMemberAdded(member));
    this.on('guildMemberRemove', (member: GuildMember | PartialGuildMember) => this._handleGuildMemberRemove(member));
    this.on('messageReactionAdd', (
      messageReaction: MessageReaction | PartialMessageReaction,
      user: User | PartialUser,
    ) => this._handleMessageReactionAdd(messageReaction, user));
    this.on('roleCreate', (role: Role) => this._handleRoleCreate(role));
  }

  /**
   * Connects bot to the database.
   */
  async _connectToDatabase(): Promise<void> {
    // Connect via Database instance.
    await getDatabase().connect();
  }

  /**
   * Handles the Discord ready event.
   */
  _handleReady(): void {
    Monitor.log(
      DiscordBot,
      MESSAGE_READY,
      MonitorLayer.UPDATE,
    );

    // Register slash commands.
    CommandManager.instantiateCommands();
    CommandManager.registerCommands(this);
  }

  /**
   * Handles the Discord error event.
   * 
   * @param {Error} error Error that occurred.
   */
  _handleError(error: Error): void {
    console.log(error);
  }

  /**
   * Handles the Discord interaction event, which includes commands.
   * 
   * @param {Interaction} interaction Interaction created.
   */
  _handleInteraction(interaction: Interaction): void {
    if (!interaction.isCommand()) {
      return;
    }

    CommandManager.handleInteraction(interaction);
  }

  /**
   * Handles the Discord message event.
   *
   * @param {Message} message Message created.
   */
  _handleMessageCreate(message: Message): void {
    CommandManager.handleMessage(message);
  }

  /**
   * Handles the Discord guild member added event.
   * 
   * @param {GuildMember} member Member who was added.
   */
  _handleGuildMemberAdded(member: GuildMember): void {
    console.log(member);
  }

  /**
   * Handles the Discord guild member removed event.
   * 
   * @param {GuildMember | PartialGuildMember} member Member who was removed.
   */
  _handleGuildMemberRemove(member: GuildMember | PartialGuildMember): void {
    console.log(member);
  }

  /**
   * Handles the Discord message reaction event.
   * 
   * @param {MessageReaction | PartialMessageReaction} messageReaction Message reaction.
   * @param {User | PartialUser} user User who reacted.
   */
  _handleMessageReactionAdd(
    messageReaction: MessageReaction | PartialMessageReaction,
    user: User | PartialUser,
  ): void {
    console.log(messageReaction, user);
  }

  /**
   * Handles the Discord role created event.
   * 
   * @param {Role} role Role created.
   */
  _handleRoleCreate(role: Role): void {
    console.log(role);
  }
}
