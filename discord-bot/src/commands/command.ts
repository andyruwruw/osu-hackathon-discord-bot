// Packages
import {
  ApplicationCommandData,
  ApplicationCommandOptionData,
} from 'discord.js';

/**
 * Abstract Command class, only implement inherited classes.
 */
export class Command {
  /**
   * Name of the Command.
   */
  _name: string;

  /**
   * Command key used to reference the command.
   */
  _key: string;

  /**
   * Description of the Command.
   */
  _description: string;

  /**
   * Type of Command.
   * Chat input: 1,
   * User: 2,
   * Message: 3,
   * Hidden: 4,
   * See https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
   */
  _type: number;

  /**
   * Whether the Command is restricted.
   */
  _restricted: boolean;

  /**
   * Additional Command options.
   */
  _options: ApplicationCommandOptionData[];

  /**
   * Subcommands of the Command.
   */
  _subCommands: Command[];

  /**
   * Instantiates a new Command.
   *
   * @param {string} name Name of the Command.
   * @param {string} key Key of the Command.
   * @param {string} description Description of the Command.
   * @param {number} type Type of Command. 
   * @param {boolean} isOfficerCommand Whether the command is an officer only command.
   * @param {ApplicationCommandOptionData[]} options Additional Command options.
   * @param {Command[]} subCommands Subcommands of the Command.
   */
  constructor(
    name: string,
    key: string,
    description: string,
    type: number,
    restricted: boolean = false,
    options: ApplicationCommandOptionData[] = [],
    subCommands: Command[] = [],
  ) {
    this._name = name;
    this._key = key;
    this._description = description;
    this._type = type;
    this._restricted = restricted;
    this._options = options;
    this._subCommands = subCommands;
  }

  /**
   * Converts the command into ApplicationCommandData for uploading to Discord.
   *
   * @returns {ApplicationCommandData} Discord accepted object for command.
   */
  createRegistration(): ApplicationCommandData {
    return {
      name: typeof(this._key) === 'string' ? this._key : this._key[0],
      description: this._description,
      type: this._type,
      defaultPermission: !this._restricted,
      options: [
        ...this._options,
        ...this._subCommands.map((command) => command.createRegistration()) as ApplicationCommandOptionData[],
      ],
    };
  }

  /**
   * Finds a subcommand by key.
   *
   * @param {string} key Key of the subcommand.
   * @returns {Command | null} Subcommand if found, null otherwise.
   */
  getSubCommand(key: string): Command | null {
    if (this._subCommands.length === 0) {
      return null;
    }

    const index = this._subCommands.findIndex(command => {
      const keys = command.getKey();

      if (typeof(keys) === 'string') {
        return keys === key;
      }
      return keys[0] === key;
    });

    if (index !== -1) {
      return this._subCommands[index];
    }
    return null;
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return this._key;
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return this._description;
  }

  /**
   * Retrieves the Command's type.
   *
   * @returns {number} Type of the Command.
   */
  getType(): number {
    return this._type;
  }

  /**
   * Whether the Command is restricted.
   *
   * @returns {boolean} Whether the Command is restricted.
   */
  isRestricted(): boolean {
    return !this._restricted;
  }
}
