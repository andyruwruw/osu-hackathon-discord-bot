// Packages
import qs from 'qs';

// Local Imports
import { request } from '../request';
import { Environment } from '../../../helpers/environment';

/**
 * Retrieves Discord authenticated token.
 *
 * @param {string} code Discord provided OAuth2 code.
 */
const callback = async (code: string) => {
  try {
    const params = new URLSearchParams({
      'client_id': Environment.getDiscordClientId(),
      'client_secret': Environment.getDiscordClientSecret(),
      'grant_type': 'authorization_code',
      'redirect_uri': Environment.getRedirectUrl(),
      code,
    });
  
    const response = await request.post(
      `/v8/oauth2/token`,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
  
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default {
  callback,
};
