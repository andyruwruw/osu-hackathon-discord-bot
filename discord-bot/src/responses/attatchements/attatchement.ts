// Packages
import {
  BufferResolvable,
  MessageAttachment,
} from 'discord.js';
import { APIAttachment } from 'discord-api-types';

/**
 * Abstract representation of a message attatchement.
 */
export class Attatchement {
  async create(): Promise<MessageAttachment> {
    const pending = [
      this._getAttatchement(),
      this._getName(),
      this._getData(),
    ];

    const [
      attatchement,
      name,
      data,
    ] = await Promise.all(pending);

    return new MessageAttachment(
      attatchement as BufferResolvable,
      name as string,
      data as APIAttachment,
    );
  }

  async _getAttatchement(): Promise<BufferResolvable> {
    return '';
  }

  async _getName(): Promise<string> {
    return '';
  }

  async _getData(): Promise<APIAttachment> {
    return null;
  }
}
