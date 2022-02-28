/**
 * Discord.js's method of fetching data involves addiitonal requests
 * if the data isn't already cached. It then returns the data in
 * unusual data structures.
 * 
 * These methods handle the requests and return the data in more
 * standardized methods.
 */

// Packages
import {
  Guild,
  GuildChannel,
  GuildMember,
  NonThreadGuildBasedChannel,
  OAuth2Guild,
} from 'discord.js';

// Local Imports
import { Monitor } from '../../../shared/helpers/monitor';
import { DiscordBot } from '../discord-bot';

/**
 * Retrieves the guilds the bot is a part of.
 *
 * @param {DiscordBot} client Discord bot client.
 * @returns {Promise<Guild[]>} Guilds the bot is in.
 */
export const getClientGuilds = async (client: DiscordBot): Promise<Guild[]> => {
  try {
    const guilds = [
      ...(await client.guilds.fetch({
        limit: 200,
      })).values(),
    ] as OAuth2Guild[];
  
    return await Promise.all(guilds.map(async (guild: OAuth2Guild) => {
      return guild.fetch();
    }));
  } catch (error) {
    Monitor.log(
      {
        name: 'DiscordData',
      },
      error,
      Monitor.Layer.WARNING,
    );
  }
  return [] as Guild[];
}

/**
 * Retrives the Guilds the Client is apart of.
 *
 * @param {DiscordBot} client Discord bot client.
 * @returns {Promise<Record<string, Guild>>} Guilds the bot is in.
 */
export const getClientGuildsAsHashmap = async (client: DiscordBot): Promise<Record<string, Guild>> => {
  try {
    const items = await getClientGuilds(client);
    const guilds = {} as Record<string, Guild>;

    for (let i = 0; i < items.length; i += 1) {
      guilds[items[i].id] = items[i];
    }

    return guilds;
  } catch (error) {
    Monitor.log(
      {
        name: 'DiscordData',
      },
      error,
      Monitor.Layer.WARNING,
    );
  }
  return {} as Record<string, Guild>;
}

/**
 * Retrieves the channels from a guild.
 *
 * @param {Guild} guild Guild to retrieve channels from.
 * @returns {Promise<GuildChannel[]>} Channels from the guild.
 */
export const getGuildChannels = async (guild: Guild): Promise<GuildChannel[]> => {
  try {
    const channels = [
      ...(await guild.channels.fetch()).values(),
    ];
  
    return await Promise.all(channels.map((async (channel: NonThreadGuildBasedChannel) => {
      return channel.fetch();
    })));
  } catch (error) {
    Monitor.log(
      {
        name: 'DiscordData',
      },
      error,
      Monitor.Layer.WARNING,
    );
  }
  return [] as GuildChannel[];
}

/**
 * Retrieves the channels from a guild.
 *
 * @param {Guild} guild Guild to retrieve channels from.
 * @returns {Promise<Record<string, GuildChannel>>} Channels from the guild.
 */
export const getGuildChannelsAsHashmap = async (guild: Guild): Promise<Record<string, GuildChannel>> => {
  try {
    const items = await getGuildChannels(guild);
    const channels = {} as Record<string, GuildChannel>;

    for (let i = 0; i < items.length; i += 1) {
      channels[items[i].id] = items[i];
    }

    return channels;
  } catch (error) {
    Monitor.log(
      { 
        name: 'DiscordData',
      },
      error,
      Monitor.Layer.WARNING,
    );
  }
  return {} as Record<string, GuildChannel>;
}

/**
 * Retrieves the memberss from a guild.
 *
 * @param {Guild} guild Guild to retrieve members from.
 * @returns {Promise<GuildMember[]>} Members from the guild.
 */
export const getGuildMembers = async (guild: Guild): Promise<GuildMember[]> =>{
  try {
    const members = [
      ...(await guild.members.list()).values(),
    ];
  
    return await Promise.all(members);
  } catch (error) {
    Monitor.log(
      { 
        name: 'DiscordData',
      },
      error,
      Monitor.Layer.WARNING,
    );
  }
  return [] as GuildMember[]
}

/**
 * Retrieves the members from a guild.
 *
 * @param {Guild} guild Guild to retrieve members from.
 * @returns {Promise<Record<string, GuildMember>>} Members from the guild.
 */
export const getGuildMembersAsHashmap = async (guild: Guild): Promise<Record<string, GuildMember>> => {
  try {
    const items = await getGuildMembers(guild);
    const members = {} as Record<string, GuildMember>;

    for (let i = 0; i < items.length; i += 1) {
      members[items[i].id] = items[i];
    }

    return members;
  } catch (error) {
    Monitor.log(
      { 
        name: 'DiscordData',
      },
      error,
      Monitor.Layer.WARNING,
    );
  }
  return {} as Record<string, GuildMember>;
}
