// Packages
import { VercelRequest } from '@vercel/node';

// Local Imports
import {
  getCookie,
  decodeToken,
} from './cookies';
import { Database } from '../../../shared/database/database';

// Types
import {
  IMember,
  IUserToken,
} from '../../../shared/types';

/**
 * Validates a request and returns user.
 *
 * @param {VercelRequest} req Incoming request.
 * @param {Database} database Database instance.
 * @returns {Promise<Record<string, IMember | string> | null>} User if valid, null otherwise.
 */
export const validate = async (
  req: VercelRequest,
  database: Database,
): Promise<Record<string, IMember | string> | null> => {
  const cookie = getCookie(req);

  if (!cookie || cookie === '') {
    return null;
  }

  const {
    memberId,
    accessToken,
  } = decodeToken(cookie);

  if (!memberId || !accessToken) {
    return null;
  }

  const token = await database.userToken.findOne({
    userId: memberId,
    token: cookie,
  }) as IUserToken | null;

  if (!token) {
    return null;
  }
  
  const user = await database.member.findOne({
    id: memberId,
  }) as IMember | null;

  return {
    user,
    accessToken,
  };
}
