// Packages
import { GuildEmoji } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js emojiCreate event.
 */
export class EmojiCreateHandler extends Handler<GuildEmoji> {
  /**
   * Handles the event.
   */
  execute(emoji: GuildEmoji) {
  }
}
