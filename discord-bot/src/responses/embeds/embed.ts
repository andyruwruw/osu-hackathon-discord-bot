// Packages
import {
  EmbedFieldData,
  MessageEmbed,
  MessageEmbedAuthor,
  MessageEmbedFooter,
  MessageEmbedImage,
  MessageEmbedThumbnail,
  MessageEmbedVideo,
} from "discord.js";

/**
 * Abstract representation of Discord embed.
 */
export class Embed {
  /**
   * Creates the embed.
   *
   * @returns {Promise<MessageEmbed>} JSON of embed object.
   */
  async create(): Promise<MessageEmbed> {
    try {
      const pending = [
        this._getTitle(),
        this._getDescription(),
        this._getUrl(),
        this._getTimestamp(),
        this._getColor(),
        this._getFields(),
        this._getAuthor(),
        this._getThumbnail(),
        this._getImage(),
        this._getVideo(),
        this._getFooter(),
      ];

      const [
        title,
        description,
        url,
        timestamp,
        color,
        fields,
        author,
        thumbnail,
        image,
        video,
        footer,
      ] = await Promise.all(pending);

      return new MessageEmbed({
        title: title as string,
        description: description as string,
        url: url as string,
        timestamp: timestamp as Date | number,
        color: color as [ number, number, number ],
        fields: fields as EmbedFieldData[],
        author: author as MessageEmbedAuthor,
        thumbnail: thumbnail as MessageEmbedThumbnail,
        image: image as MessageEmbedImage,
        video: video as MessageEmbedVideo,
        footer: footer as MessageEmbedFooter,
      });
    } catch (error) {
      console.log(error);
    }
    return new MessageEmbed();
  }

  /**
   * Retrieves the title of the embed.
   *
   * @returns {Promise<string>} Title of the embed.
   */
  async _getTitle(): Promise<string> {
    return null;
  }

  /**
   * Retrieves the description of the embed.
   *
   * @returns {Promise<string>} Description of the embed.
   */
  async _getDescription(): Promise<string> {
    return null;
  }

  /**
   * Retreives the url of the embed.
   *
   * @returns {Promise<string>} Url of the embed.
   */
  async _getUrl(): Promise<string> {
    return null;
  }
  
  /**
   * Retrieves the timestamp of the embed.
   *
   * @returns {Promise<Date | number>} Timestamp of the embed. 
   */
  async _getTimestamp(): Promise<Date | number> {
    return null;
  }

  /**
   * Retrieves the color of the embed.
   *
   * @returns {Promise<number[]>} Color of the embed.
   */
  async _getColor(): Promise<number[]> {
    return [
      205,
      135,
      55,
    ];
  }

  /**
   * Retrieves the embeds fields.
   *
   * @returns {Promise<EmbedFieldData[]>} Embed fields.
   */
  async _getFields(): Promise<EmbedFieldData[]> {
    return [];
  }

  /**
   * Retrieves the embeds author.
   * 
   * @returns {Promise<MessageEmbedAuthor>} Embed author.
   */
  async _getAuthor(): Promise<MessageEmbedAuthor> {
    return null;
  }

  /**
   * Retrieves the embeds thumbnail.
   * 
   * @returns {Promise<MessageEmbedThumbnail>} Embed thumbnail.
   */
  async _getThumbnail(): Promise<MessageEmbedThumbnail> {
    return null;
  }

  /**
   * Retrieves the embeds image.
   * 
   * @returns {Promise<MessageEmbedImage>} Embed image.
   */
  async _getImage(): Promise<MessageEmbedThumbnail> {
    return null;
  }

  /**
   * Retrieves the embeds video.
   * 
   * @returns {Promise<MessageEmbedVideo>} Embed video.
   */
  async _getVideo(): Promise<MessageEmbedVideo> {
    return null;
  }

  /**
   * Retrieves the embeds footer.
   * 
   * @returns {Promise<MessageEmbedFooter>} Embed footer.
   */
  async _getFooter(): Promise<MessageEmbedFooter> {
    return null;
  }
}