// Packages
import {
  Client as DiscordClient,
  ClientOptions,
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

// local Imports
import {
  Database,
  getDatabase,
} from './database';
import {
  Monitor,
  MonitorLayer,
} from './helpers/monitor';
import {
  MESSAGE_DATABASE_CONNECTION_SUCCESS,
  MESSAGE_READY,
} from './config/messages';

/**
 * Discord Bot extends discord.js Client.
 */
export class DiscordBot extends DiscordClient {
  /**
   * Database connection instance.
   */
  _database: Database;

  /**
   * Instantiates a new Discord bot.
   *
   * @param {ClientOptions} options Options for the client.
   */
  constructor(options: ClientOptions) {
    super(options);

    this._database = getDatabase();

    this._setEventHandlers();
    this._connectToDatabase();
  }

  /**
   * Sets event handlers for the Discord bot.
   */
  _setEventHandlers(): void {
    this.on('ready', () => this._handleReady());
    this.on('error', (error: Error) => this._handleError(error));
    this.on('interactionCreate', (interaction: Interaction) => this._handleInteraction(interaction));
    this.on('messageCreate', (message: Message) => this._handlemessageCreate(message));
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
    await this._database.connect();

    // If connection was successful, log success.
    if (await this._database.isConnected()) {
      Monitor.log(
        DiscordBot,
        MESSAGE_DATABASE_CONNECTION_SUCCESS,
        MonitorLayer.UPDATE,
      );
    }
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
    this._registerCommands();
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
   * Handles the Discord interaction event.
   * 
   * @param {Interaction} interaction Interaction created.
   */
  _handleInteraction(interaction: Interaction): void {
    console.log(interaction);
  }

  /**
   * Handles the Discord message event.
   *
   * @param {Message} message Message created.
   */
  _handlemessageCreate(message: Message): void {
    console.log(message);
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

  /**
   * Registers slash commands with Discord.
   */
  _registerCommands(): void {
  }
}
