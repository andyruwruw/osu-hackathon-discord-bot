// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import {
  DISCORD_AUTHORIZATION_SCOPES,
  DISCORD_BASE_URL,
} from '../config';
import { Environment } from '../helpers/environment';
import { Handler as AbstractHandler } from './handler';

/**
 * Handles login attempts.
 */
export class LoginHandler extends AbstractHandler {
  /**
   * Handles the request.
   *
   * @param {VercelRequest} req Incoming request.
   * @param {VercelResponse} res Outgoing response.
   */
  async execute(
    req: VercelRequest,
    res: VercelResponse,
  ): Promise<void> {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: Environment.getDiscordClientId(),
      state: Environment.getState(),
      scope: DISCORD_AUTHORIZATION_SCOPES.join(' '),
      redirect_uri: Environment.getRedirectUrl(),
    });
  
    res.send({
      redirect: `${DISCORD_BASE_URL}/oauth2/authorize?${params.toString()}`,
    });
  }
}

export const Handler =  new LoginHandler();
