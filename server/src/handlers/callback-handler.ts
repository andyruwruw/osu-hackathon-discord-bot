// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { Handler as AbstractHandler } from './handler';
import api from '../api';
import { Environment } from '../helpers/environment';

/**
 * Handles login attempts.
 */
export class CallbackHandler extends AbstractHandler {
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
    const {
      code,
      state,
    } = req.query;

    if (state !== Environment.getState()) {
      res.status(400).send('Invalid state');
      return;
    }

    const response = await api.discord.auth.callback(code as string);

    if (!response) {
      res.status(500).send({
        error: 'Internal Server Error',
      });
    }

    res.status(200).send('Success');
  }
}

export const Handler =  new CallbackHandler();
