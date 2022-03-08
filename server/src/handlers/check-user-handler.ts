// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { Handler as AbstractHandler } from './handler';
import { Environment } from '../helpers/environment';
import api from '../api';
import { validate } from '../helpers/auth';

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
    const response = await validate(
      req,
      this._database,
    );

    if (response) {
      const { user } = response;

      res.status(200).send({
        user,
      });
    }
    res.status(203).send({});
  }
}

export const Handler =  new CallbackHandler();
