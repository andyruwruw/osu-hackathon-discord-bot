// Packages
import { GuildEmoji } from 'discord.js';

// Local Imports
import { Handler } from './handler';
import { MESSAGE_ROLE_ASSIGNMENT_EMOJI_UPDATE } from '../config/messages';
import { Monitor } from '../../../shared/helpers/monitor';

/**
 * Handles discord.js emojiUpdate event.
 */
export class EmojiUpdateHandler extends Handler<GuildEmoji> {
  /**
   * Handles the event.
   */
  async execute(
    oldEmoji: GuildEmoji,
    newEmoji: GuildEmoji,
  ): Promise<void> {
    try {
      if (oldEmoji.id === newEmoji.id) {
        return;
      }

      const existing = await Handler._database.messageRoleAssignment.find({
        emoji: oldEmoji.id,
      });

      if (existing.length > 0) {
        Monitor.log(
          EmojiUpdateHandler,
          MESSAGE_ROLE_ASSIGNMENT_EMOJI_UPDATE,
          Monitor.Layer.DEBUG,
        );

        for (let i = 0; i < existing.length; i += 1) {
          const messageRoleAssignment = existing[i];

          await Handler._database.messageRoleAssignment.updateMany({
            emoji: messageRoleAssignment.emoji,
          }, {
            emoji: newEmoji.id,
          });
        }
      }
    } catch (error) {
      Monitor.log(
        EmojiUpdateHandler,
        error,
        Monitor.Layer.WARNING,
      );
    }
  }
}
