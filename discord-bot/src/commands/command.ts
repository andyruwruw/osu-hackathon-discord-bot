/**
 * The Command class is abstract and defines methods
 * used by all commands, namely converting a concrete
 * implementation into a JSON object that Discord
 * recognizes as a command.
 * 
 * Use of this class is limited to concrete commands
 * inheriting from this class.
 */

// Packages
import {
  ApplicationCommandData,
  ApplicationCommandOptionData,
  CommandInteraction,
  Guild,
  Interaction,
} from 'discord.js';
import { UsedAbstractCommandError } from '../errors/used-abstract-command-error';

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
   * Has choiced response cached.
   */
  _cachedHasChoices: boolean | null = null;

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
  create(): ApplicationCommandData {
    return {
      name: typeof(this._key) === 'string' ? this._key : this._key[0],
      description: this._description,
      type: this._type,
      defaultPermission: !this._restricted,
      options: [
        ...this._options,
        ...this._subCommands.map((command) => command.create()) as ApplicationCommandOptionData[],
      ],
    };
  }
  
  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    throw new UsedAbstractCommandError();
  }

  /**
   * Updates choices for the Command.
   *
   * @param {Guild} guild Guild to update choices for.
   * @returns {Promise<boolean>} Whether the choices were updated.
   */
  async updateChoices(guild: Guild): Promise<boolean> {
    if (!this.hasChoices()) {
      return false;
    }
    return true;
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
   * Whether this command has sub commands.
   *
   * @returns {boolean} Whether this command has sub commands.
   */
  hasSubcommands() {
    return this._subCommands.length > 0;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return this._options;
  }

  /**
   * Retrieves a commands set of subcommands.
   *
   * @returns {Command[]} Subcommands of the Command.
   */
  getSubcommands() {
    return this._subCommands;
  }

  /**
   * Whether this command has additional options.
   *
   * @returns {boolean} Whether this command has additional options.
   */
  hasOptions() {
    return this._options.length > 0;
  }

  /**
   * Whether this command has an array of choices for parameters.
   *
   * @returns {boolean} Whether this command has choices.
   */
  hasChoices() {
    if (this._cachedHasChoices !== null) {
      if (!this.hasOptions()) {
        this._cachedHasChoices = false;
      } else {
        for (let i = 0; i < this._options.length; i += 1) {
          if ('choices' in this._options[i]) {
            this._cachedHasChoices = true;
            break;
          } else if (i === this._options.length - 1) {
            this._cachedHasChoices = false;
          }
        }
      }
    }
    return this._cachedHasChoices;
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
   * Retrieves the Command's name.
   *
   * @returns {string} Name of the Command.
   */
  getName(): string {
    return this._name;
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
