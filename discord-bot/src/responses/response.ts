/**
 * The Response class is abstract and defines methods
 * used by all responses, namely converting a concrete
 * implementation into a JSON object that Discord
 * recognizes as a message.
 * 
 * Messages can get complicated, with attatchments,
 * embeds, components and dynamic messages. All these
 * components are gathered via virtual methods, which
 * are overriden in concrete classes to give each 
 * response a unique behavior.
 * 
 * Use of this class is limited to concrete commands
 * inheriting from this class.
 */

// Packages
import {
  BaseMessageComponentOptions,
  BufferResolvable,
  FileOptions,
  InteractionReplyOptions,
  MessageActionRow,
  MessageActionRowOptions,
  MessageAttachment,
  MessageEmbed,
} from 'discord.js';

/**
 * Abstract response object.
 */
export class Response {
  /**
   * Creates response object.
   * 
   * @returns {Promise<InteractionReplyOptions>} JSON of message object.
   */
  async create(): Promise<InteractionReplyOptions> {
    const pending = [
      this._getContent(),
      this._getEmbeds(),
      this._getFiles(),
      this._getComponents(),
      this._getAttatchements(),
    ];

    const [
      content,
      embeds,
      files,
      components,
      attatchements,
    ] = await Promise.all(pending);

    return {
      content: content as string,
      embeds: embeds as MessageEmbed[],
      files: files as (FileOptions | BufferResolvable | MessageAttachment)[],
      components: components as (MessageActionRow | (Required<BaseMessageComponentOptions> & MessageActionRowOptions))[],
      attachments: attatchements as MessageAttachment[],
    };
  }

  /**
   * Returns content for message.
   *
   * @returns {Promise<string>} Message content.
   */
  async _getContent(): Promise<string> {
    return ' ';
  }

  /**
   * Returns embeds for message.
   *
   * @returns {Promise<MessageEmbed[]>} Message embeds.
   */
  async _getEmbeds(): Promise<MessageEmbed[]> {
    return [];
  }

  /**
   * Returns attatched files for message.
   *
   * @returns {Promise<FileOptions[] | BufferResolvable[] | MessageAttachment[]>} Attatched files.
   */
  async _getFiles(): Promise<(FileOptions | BufferResolvable | MessageAttachment)[]> {
    return [];
  }

  /**
   * Returns attatched message components.
   *
   * @returns {Promise<(MessageActionRow | (Required<BaseMessageComponentOptions> & MessageActionRowOptions))[]>} Message components.
   */
  async _getComponents(): Promise<(MessageActionRow | (Required<BaseMessageComponentOptions> & MessageActionRowOptions))[]> {
    return [];
  }

  /**
   * Returns message attatchements.
   *
   * @returns {Promise<MessageAttachment[]>} Message attatchements.
   */
  async _getAttatchements(): Promise<MessageAttachment[]> {
    return [];
  }
}
