import { EmbedFieldData, MessageEmbedAuthor, MessageEmbedFooter, MessageEmbedThumbnail, MessageEmbedVideo } from "discord.js";

interface IEmbedField {
  name: string;
  value: string;
  inline: boolean;
}

interface IEmbedAuthor {
  name: string;
  url: string;
  iconURL: string;
  proxyIconURL: string;
}

interface IEmbedThumbnail {

}

export class Embed {
  async _getTitle(): Promise<string> {
    return null;
  }

  async _getDescription(): Promise<string> {
    return null;
  }

  async _getUrl(): Promise<string> {
    return null;
  }

  async _getTimestamp(): Promise<Date | number> {
    return null;
  }

  async _getColor(): Promise<number[]> {
    return [
      0,
      0,
      0,
    ];
  }

  async _getFields(): Promise<EmbedFieldData> {
    return null;
  }

  async _getAuthor(): Promise<MessageEmbedAuthor> {
    return null;
  }

  async _getThumbnail(): Promise<MessageEmbedThumbnail> {
    return null;
  }

  async _getImage(): Promise<MessageEmbedThumbnail> {
    return null;
  }

  async _getVideo(): Promise<MessageEmbedVideo> {
    return null;
  }

  async _getFooter(): Promise<MessageEmbedFooter> {
    return null;
  }
}