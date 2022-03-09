// Local Imports
import { MessageEmbed } from 'discord.js';
import { HelpEmbed } from './embeds/help-embed';
import { Response } from './response';

export class HelpResponse extends Response {
  /**
   * Returns embeds for message.
   *
   * @returns {Promise<MessageEmbed[]>} Message embeds.
   */
  async _getEmbeds(): Promise<MessageEmbed[]> {
    return [
      await (new HelpEmbed()).create(),
    ];
  }
}
