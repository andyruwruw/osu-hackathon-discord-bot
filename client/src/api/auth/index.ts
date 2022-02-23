// Local Imports
import { request } from '../request';

// TYpes
import { IMember } from '../../../../shared/types';

/**
 * Retrieves URL for OAuth2 login with Discord.
 *
 * @returns {Promise<string | null>} URL for OAuth2 login with Discord.
 */
const login = async (): Promise<string | null> => {
  try {
    const response = await request.get('/login');

    if (response.status === 200) {
      return response.data.url;
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Finalizes the OAuth2 login with Discord.
 *
 * @param {string} code Discord provided code to exchange for token.
 * @param {string} state Authorization state from server.
 * @returns {Promise<IMember | null>} User object if successful.
 */
const callback = async (
  code: string,
  state: string,
): Promise<IMember | null> => {
  return request.get(`/callback?code=${code}&state=${state}`);
}

/**
 * Logs the user out of the application.
 */
const logout = async (): Promise<void> => {
  await request.get('/logout');
}

export default {
  login,
  callback,
  logout,
};
