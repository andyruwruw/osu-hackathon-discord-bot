// Packages
import { GuildEmoji } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_ROLE_ASSIGNMENT_EMOJI_DELETED } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js emojiDelete event.
 */
export class EmojiDeleteHandler extends Handler<GuildEmoji> {
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
          EmojiDeleteHandler,
          MESSAGE_ROLE_ASSIGNMENT_EMOJI_DELETED,
          Monitor.Layer.WARNING,
        );

        for (let i = 0; i < existing.length; i += 1) {
          const messageRoleAssignment = existing[i];

          await Handler._database.messageRoleAssignment.delete({
            message: messageRoleAssignment.message,
            emoji: messageRoleAssignment.emoji,
            role: messageRoleAssignment.role,
          });
        }
      }
    } catch (error) {
      Monitor.log(
        EmojiDeleteHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
