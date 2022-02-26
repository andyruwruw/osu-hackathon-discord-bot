// Packages
import { Channel, Guild, NonThreadGuildBasedChannel, OAuth2Guild } from 'discord.js';

// Local Imports
import { DiscordBot } from '../discord-bot';
import { getDatabase } from '../../../shared/database';

/**
 * Ensures the database is synced with Discord.
 */
export class DataSync {
  /**
   * Ensures the database is synced with Discord.
   *
   * @param {DiscordBot} client Discord bot client.
   */
  static async syncDatabase(client: DiscordBot): Promise<void> {

  }

  static async checkGuilds(client: DiscordBot): Promise<void> {
    const guilds = await this._getGuildsFromClient(client);

    for (let i = 0; i < guilds.length; i += 1) {
      await this._checkChannels(
        client,
        guilds[i],
      );
    }
  }

  static async _checkChannels(
    client: DiscordBot,
    guild: Guild,
  ): Promise<void> {
    const channels = await this._getChannelsFromGuild(guild);

    for (let i = 0; i < channels.length; i += 1) {
    }
  }

  static async checkMembers(client: DiscordBot): Promise<void> {
  }

  /**
   * Retrieves the guilds the bot is a part of.
   *
   * @param {DiscordBot} client Discord bot client.
   * @returns {Promise<Guild[]>} Guilds the bot is in..
   */
  static async _getGuildsFromClient(client: DiscordBot): Promise<Guild[]> {
    const guilds = [
      ...(await client.guilds.fetch({
        limit: 200,
      })).values(),
    ] as OAuth2Guild[];

    return await Promise.all(guilds.map(async (guild: OAuth2Guild) => {
      return guild.fetch();
    }));
  }

  /**
   * Retrieves the channels from a guild.
   *
   * @param {Guild} guild Guild to retrieve channels from.
   * @returns {Promise<Channel[]>} Channels from the guild.
   */
  static async _getChannelsFromGuild(guild: Guild): Promise<Channel[]> {
    const channels = [
      ...(await guild.channels.fetch()).values(),
    ];

    return await Promise.all(channels.map((async (channel: NonThreadGuildBasedChannel) => {
      return channel.fetch();
    })));
  }
}
