// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { CallbackHandler } from '../src/handlers';
import { handleCors } from '../src/helpers/cors';

export default async function (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  handleCors(
    req,
    res,
  );
  await CallbackHandler.execute(
    req,
    res,
  );
}
