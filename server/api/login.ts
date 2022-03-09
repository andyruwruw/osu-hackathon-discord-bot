// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { LoginHandler } from '../src/handlers';
import { handleCors } from '../src/helpers/cors';

export default async function (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  handleCors(
    req,
    res,
  );
  await LoginHandler.execute(
    req,
    res,
  );
}
