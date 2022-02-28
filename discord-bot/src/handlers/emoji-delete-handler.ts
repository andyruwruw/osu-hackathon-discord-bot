// Packages
import { GuildEmoji } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js emojiDelete event.
 */
export class EmojiDeleteHandler extends Handler<GuildEmoji> {
  /**
   * Handles the event.
   */
  execute(emoji: GuildEmoji) {
  }
}
