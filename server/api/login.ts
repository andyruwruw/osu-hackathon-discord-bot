// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { LoginHandler } from '../src/handlers';

export default async function (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  await LoginHandler.execute(req, res);
}
