// Packages
import {
  BitFieldResolvable,
  Intents,
  IntentsString,
} from 'discord.js';

/**
 * Generates Invite Link
 *
 * @param {string} clientId Discord bot Id.
 * @returns {string} Invite link.
 */
 export const INVITE_LINK = (clientId: string) => (`https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=1644972469495&scope=bot%20applications.commands`);

/**
 * Discord application command option types.
 */
export const APPLICATION_COMMAND_OPTION_TYPES = {
  SUB_COMMAND: 1,
  SUB_COMMAND_GROUP: 2,
  STRING: 3,
  INTEGER: 4,
  BOOLEAN: 5,
  USER: 6,
  CHANNEL: 7,
  ROLE: 8,
  MENTIONABLE: 9,
  NUMBER: 10,
};

/**
 * Discord application command types.
 */
export const APPLICATION_COMMAND_TYPES = {
  CHAT_INPUT: 1,
  USER: 2,
  MESSAGE: 3,
  HIDDEN: 4,
};

/**
 * The default intents for the bot.
 */
export const DISCORD_INTENTS: BitFieldResolvable<IntentsString, number> = [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGES,
  Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  16, // Intents.FLAGS.GUILD_SCHEDULED_EVENTS 
];
