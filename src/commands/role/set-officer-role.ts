// Local Imports
import { Command } from '../command';
import { APPLICATION_COMMAND_TYPES } from '../../config';

/**
 * Sets the officer role with admin permissions.
 */
export class SetOfficerRoleCommand extends Command {
  /**
   * Instantiates a new SetOfficerRoleCommand.
   */
  constructor() {
    super(
      'Set Officer Role',
      [
        'officer',
        'role',
        'set',
        'officer',
      ],
      'Sets the officer role with admin permissions.',
      APPLICATION_COMMAND_TYPES.HIDDEN,
      true,
    );
  }
}
