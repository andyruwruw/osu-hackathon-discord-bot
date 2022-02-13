// Local Imports
import { Permissions } from './permissions';

/**
 * Permissions for officer commands.
 */
export class OfficerPermissions extends Permissions {
  /**
   * Instantiates a new OfficerPermissions object.
   */
  constructor() {
    super(
      'officer',
      true,
    );
  }
}
