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
  ApplicationCommand,
  Guild,
  GuildChannel,
  GuildMember,
  GuildResolvable,
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

/**
 * Retrieves commands previously registered with the client.
 *
 * @param {DiscordBot} client Discord.js client.
 * @returns {Promise<Record<ApplicationCommand[]>} Commands registered.
 */
export const getApplicationRegisteredCommands = async (client: DiscordBot): Promise<ApplicationCommand[]> => {
  const applicationCommands = await client.application.commands.fetch();
  return applicationCommands.reduce((
    acc: ApplicationCommand<{ guild: GuildResolvable }>[],
    command: ApplicationCommand<{ guild: GuildResolvable }>,
  ) => {
    acc.push(command);
    return acc;
  }, [] as ApplicationCommand<{ guild: GuildResolvable }>[]);
}

/**
 * Retrieves commands previously registered with the client.
 *
 * @param {DiscordBot} client Discord.js client.
 * @returns {Promise<Record<string, ApplicationCommand>>} Commands registered.
 */
export const getApplicationRegisteredCommandsAsHashmap = async (client: DiscordBot): Promise<Record<string, ApplicationCommand>> => {
  const items = await getApplicationRegisteredCommands(client);
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
 * @returns {Promise<ApplicationCommand[]>} Commands registered.
 */
export const getGuildRegisteredCommands = async (guild: Guild): Promise<ApplicationCommand[]> => {
  const guildCommands = await guild.commands.fetch();
  return guildCommands.reduce((
    acc: ApplicationCommand<{}>[],
    command: ApplicationCommand<{}>,
  ) => {
    acc.push(command);
    return acc;
  }, [] as ApplicationCommand<{}>[]);
}

/**
 * Retrieves commands previously registered with the guild.
 *
 * @param {Guild} guild 
 * @returns {Promise<Record<string, ApplicationCommand>>} Commands registered.
 */
export const getGuildRegisteredCommandsAsHashmap = async (guild: Guild): Promise<Record<string, ApplicationCommand>> => {
  const items = await getGuildRegisteredCommands(guild);
  const commands = {} as Record<string, ApplicationCommand>;

  for (let i = 0; i < items.length; i += 1) {
    const command = items[i];
    commands[command.id] = command;
  }

  return commands;
}
