// Packages
import { GuildEmoji } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_ROLE_ASSIGNMENT_EMOJI_DELETED } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js emojiCreate event.
 */
export class EmojiCreateHandler extends Handler<GuildEmoji> {
  /**
   * Handles the event.
   */
  async execute(emoji: GuildEmoji): Promise<void> {
    try {
      const existing = await Handler._database.messageRoleAssignment.find({
        emoji: emoji.id,
      });

      if (existing.length > 0) {
        Monitor.log(
          EmojiCreateHandler,
          MESSAGE_ROLE_ASSIGNMENT_EMOJI_DELETED,
          Monitor.Layer.WARNING,
        );
      }
    } catch (error) {
      Monitor.log(
        EmojiCreateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export const EmojiCreateHandlerInstance = new EmojiCreateHandler();
