// Packages
import {
  Client as DiscordClient,
  ClientOptions,
  GuildMember,
  Interaction,
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

    // Discord Events
    this.on('ready', () => this._handleReady());
    this.on('error', (error: Error) => this._handleError(error));
    this.on('interactionCreate', (interaction: Interaction) => this._handleInteraction(interaction));
    this.on('guildMemberAdd', (member: GuildMember) => this._handleGuildMemberAdded(member));
    this.on('guildMemberRemove', (member: GuildMember | PartialGuildMember) => this._handleGuildMemberRemove(member));
    this.on('messageReactionAdd', (messageReaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) => this._handleMessageReactionAdd(messageReaction, user));
    this.on('roleCreate', (role: Role) => this._handleRoleCreate(role));

    this._connectToDatabase();
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
   */
  _handleError(error: Error): void {
  }

  /**
   * Handles the Discord interaction event.
   */
  _handleInteraction(interaction: Interaction): void {
  }

  /**
   * Handles the Discord guild member added event.
   */
  _handleGuildMemberAdded(member: GuildMember): void {
  }

  /**
   * Handles the Discord guild member removed event.
   */
  _handleGuildMemberRemove(member: GuildMember | PartialGuildMember): void {
  }

  /**
   * Handles the Discord message reaction event.
   */
  _handleMessageReactionAdd(
    messageReaction: MessageReaction | PartialMessageReaction,
    user: User | PartialUser,
  ): void {
  }

  /**
   * Handles the Discord role created event.
   */
  _handleRoleCreate(role: Role): void {
  }

  /**
   * Registers slash commands with Discord.
   */
  _registerCommands(): void {
  }
}
