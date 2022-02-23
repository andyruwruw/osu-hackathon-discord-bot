// Local Imports
import { APPLICATION_COMMAND_TYPES } from '../../config';
import { Command } from '../command';
import { SetOfficerRoleCommand } from './set-officer-role';

/**
 * Subcommands of this command.
 */
const SUBCOMMANDS = [
  new SetOfficerRoleCommand(),
];

/**
 * Subset of role commands.
 */
export class RoleCommand extends Command {
  /**
   * Instantiates a new RoleCommand.
   */
  constructor() {
    super(
      'Role Subset',
      'role',
      'Designate roles.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
      [],
      SUBCOMMANDS,
    );
  }
}
