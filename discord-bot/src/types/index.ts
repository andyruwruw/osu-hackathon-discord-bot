// Packages
import {
  Client,
  Guild,
} from 'discord.js';

/**
 * Discord client.
 */
export interface IDiscordBot extends Client {
  getGuilds: () => Promise<Record<string, Guild>>
}
