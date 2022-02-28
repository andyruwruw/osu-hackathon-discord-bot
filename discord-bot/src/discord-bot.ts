/**
 * This is the main discord.js bot client class
 * that maintains the connection with Discord.
 * 
 * Events are possed to handlers.
 */

// Packages
import {
  Client as DiscordClient,
  ClientOptions,
  DMChannel,
  Guild,
  GuildBan,
  GuildChannel,
  GuildEmoji,
  GuildMember,
  GuildScheduledEvent,
  Interaction,
  Message,
  MessageReaction,
  PartialGuildMember,
  RateLimitData,
  Role,
  User,
} from 'discord.js';

// Local Imports
import { 
  ChannelCreateHandler,
  ChannelDeleteHandler,
  ChannelUpdateHandler,
  EmojiCreateHandler,
  EmojiDeleteHandler,
  EmojiUpdateHandler,
  ErrorHandler,
  GuildBanAddHandler,
  GuildBanRemoveHandler,
  GuildCreateHandler,
  GuildDeleteHandler,
  GuildMemberAddHandler,
  GuildMemberRemoveHandler,
  GuildMemberUpdateHandler,
  GuildScheduledEventCreateHandler,
  GuildScheduledEventDeleteHandler,
  GuildScheduledEventUpdateHandler,
  GuildScheduledEventUserAddHandler,
  GuildScheduledEventUserRemoveHandler,
  GuildUpdateHandler,
  InteractionCreateHandler,
  MessageCreateHandler,
  MessageDeleteHandler,
  MessageReactionAddHandler,
  MessageReactionRemoveHandler,
  RateLimitHandler,
  ReadyHandler,
  RoleCreateHandler,
  RoleDeleteHandler,
  RoleUpdateHandler,
  UserUpdateHandler,
} from './handlers';
import { DataSync } from './helpers/data-sync';
import { getDatabase } from '../../shared/database';
import { Monitor } from '../../shared/helpers/monitor';

// Types
import { IDiscordBot } from './types';
import { Handler } from './handlers/handler';

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
    Handler.setClient(this);
    Handler.setDatabase(getDatabase());

    this._setEventHandlers();
    this._connectToDatabase();

    DataSync.syncDatabase(this);
  }

  /**
   * Connects bot to the database.
   */
  async _connectToDatabase(): Promise<void> {
    try {
      // Connect via Database instance.
      await getDatabase().connect();
    } catch (error) {
      Monitor.log(
        DiscordBot,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }

  /**
   * Sets event handlers for the Discord bot.
   */
  _setEventHandlers(): void {
    this.on('channelCreate', (channel: GuildChannel) => ChannelCreateHandler.execute(channel));
    this.on('channelDelete', (channel: GuildChannel | DMChannel) => ChannelDeleteHandler.execute(channel));
    this.on('channelUpdate', (
      oldChannel: GuildChannel | DMChannel,
      newChannel: GuildChannel | DMChannel,
    ) => ChannelUpdateHandler.execute(
      oldChannel,
      newChannel,
    ));
    this.on('emojiCreate', (emoji: GuildEmoji) => EmojiCreateHandler.execute(emoji));
    this.on('emojiDelete', (emoji: GuildEmoji) => EmojiDeleteHandler.execute(emoji));
    this.on('emojiUpdate', (
      oldEmoji: GuildEmoji,
      newEmoji: GuildEmoji,
    ) => EmojiUpdateHandler.execute(
      oldEmoji,
      newEmoji,
    ));
    this.on('error', (error: Error) => ErrorHandler.execute(error));
    this.on('guildBanAdd', (ban: GuildBan) => GuildBanAddHandler.execute(ban));
    this.on('guildBanRemove', (ban: GuildBan) => GuildBanRemoveHandler.execute(ban));
    this.on('guildCreate', (guild: Guild) => GuildCreateHandler.execute(guild));
    this.on('guildDelete', (guild: Guild) => GuildDeleteHandler.execute(guild));
    this.on('guildMemberAdd', (member: GuildMember) => GuildMemberAddHandler.execute(member));
    this.on('guildMemberRemove', (member: GuildMember | PartialGuildMember) => GuildMemberRemoveHandler.execute(member));
    this.on('guildMemberUpdate', (
      oldMember: GuildMember,
      newMember: GuildMember,
    ) => GuildMemberUpdateHandler.execute(
      oldMember,
      newMember,
    ));
    this.on('guildScheduledEventCreate', (guildScheduledEvent: GuildScheduledEvent) => GuildScheduledEventCreateHandler.execute(guildScheduledEvent));
    this.on('guildScheduledEventDelete', (guildScheduledEvent: GuildScheduledEvent) => GuildScheduledEventDeleteHandler.execute(guildScheduledEvent));
    this.on('guildScheduledEventUpdate', (
      oldGuildScheduledEvent: GuildScheduledEvent,
      newGuildScheduledEvent: GuildScheduledEvent,
    ) => GuildScheduledEventUpdateHandler.execute(
      oldGuildScheduledEvent,
      newGuildScheduledEvent,
    ));
    this.on('guildScheduledEventUserAdd', (
      guildScheduledEvent: GuildScheduledEvent,
      user: User,
    ) => GuildScheduledEventUserAddHandler.execute(
      guildScheduledEvent,
      user,
    ));
    this.on('guildScheduledEventUserRemove', (
      guildScheduledEvent: GuildScheduledEvent,
      user: User,
    ) => GuildScheduledEventUserRemoveHandler.execute(
      guildScheduledEvent,
      user,
    ));
    this.on('guildUpdate', (
      oldGuild: Guild,
      newGuild: Guild,
    ) => GuildUpdateHandler.execute(
      oldGuild,
      newGuild,
    ));
    this.on('interactionCreate', (interaction: Interaction) => InteractionCreateHandler.execute(interaction));
    this.on('messageCreate', (message: Message) => MessageCreateHandler.execute(message));
    this.on('messageDelete', (message: Message) => MessageDeleteHandler.execute(message));
    this.on('messageReactionAdd', (
      messageReaction: MessageReaction,
      user: User,
    ) => MessageReactionAddHandler.execute(
      messageReaction,
      user,
    ));
    this.on('messageReactionRemove', (
      messageReaction: MessageReaction,
      user: User,
    ) => MessageReactionRemoveHandler.execute(
      messageReaction,
      user,
    ));
    this.on('rateLimit', (rateLimitData: RateLimitData) => RateLimitHandler.execute(rateLimitData));
    this.on('ready', (client: DiscordClient) => ReadyHandler.execute(client));
    this.on('roleCreate', (role: Role) => RoleCreateHandler.execute(role));
    this.on('roleDelete', (role: Role) => RoleDeleteHandler.execute(role));
    this.on('roleUpdate', (
      oldRole: Role,
      newRole: Role,
    ) => RoleUpdateHandler.execute(
      oldRole,
      newRole,
    ));
    this.on('userUpdate', (
      oldUser: User,
      newUser: User,
    ) => UserUpdateHandler.execute(
      oldUser,
      newUser,
    ));
  }
}
