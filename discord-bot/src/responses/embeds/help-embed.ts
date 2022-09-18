// Packages
import { EmbedFieldData } from 'discord.js';
import { CommandManager } from '../../commands';
import { Embed } from './embed';

export class HelpEmbed extends Embed {
  /**
   * Retrieves the title of the embed.
   *
   * @returns {Promise<string>} Title of the embed.
   */
  async _getTitle(): Promise<string> {
    return 'Command List';
  }

  /**
   * Retrieves the description of the embed.
   *
   * @returns {Promise<string>} Description of the embed.
   */
  async _getDescription(): Promise<string> {
    return '';
  }

  /**
   * Retrieves the embeds fields.
   *
   * @returns {Promise<EmbedFieldData[]>} Embed fields.
   */
  async _getFields(): Promise<EmbedFieldData[]> {
    const fields = [] as EmbedFieldData[];

    for (let i = 0; i < CommandManager._commands.length; i += 1) {
      if (CommandManager._commands[i].hasSubcommands()) {
        const subCommands = CommandManager._commands[i].getSubcommands();

        for (let j = 0; j < subCommands.length; j += 1) {
          const subCommand = subCommands[j];
          const parameters = [];
          const options = subCommand.getOptions();

          for (let k = 0; k < options.length; k += 1) {
            if (options[k].type >= 3) {
              parameters.push(`:${options[k].name}`);
            }
          }

          let parameterString = '';
          if (parameters.length > 0) {
            parameterString = ` ${parameters.join(' ')}`;
          }

          fields.push({
            name: `/${CommandManager._commands[i].getKey()} ${subCommands[j].getKey()}${parameterString}`,
            value: subCommands[j].getDescription(),
          });
        }
      }

      const parameters = [];
      const options = CommandManager._commands[i].getOptions();

      for (let j = 0; j < options.length; j += 1) {
        if (options[j].type >= 3) {
          parameters.push(`:${options[j].name}`);
        }
      }

      let parameterString = '';
      if (parameters.length > 0) {
        parameterString = ` ${parameters.join(' ')}`;
      }

      fields.push({
        name: `/${CommandManager._commands[i].getKey()}${parameterString}`,
        value: CommandManager._commands[i].getDescription(),
        inline: false,
      })
    }

    return fields;
  }
}
