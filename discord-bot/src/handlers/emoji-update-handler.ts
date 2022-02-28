// Packages
import { GuildEmoji } from 'discord.js';

// Local Imports
import { Handler } from './handler';

/**
 * Handles discord.js emojiUpdate event.
 */
export class EmojiUpdateHandler extends Handler<GuildEmoji> {
  /**
   * Handles the event.
   */
  execute(
    oldEmoji: GuildEmoji,
    newEmoji: GuildEmoji,
  ) {
  }
}
