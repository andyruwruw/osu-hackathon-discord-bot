// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Creates a new role assigner.
 */
export class CreateRoleAssignerCommand extends Command {
  /**
   * Instantiates a new CreateRoleAssignerCommand.
   */
  constructor() {
    super(
      'Create a Role Assigner',
      'role-assigner',
      ' Creates a new role assigner.',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      true,
    );
  }
}
