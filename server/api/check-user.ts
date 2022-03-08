// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { CheckUserHandler } from '../src/handlers';
import { handleCors } from '../src/helpers/cors';

export default async function (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  handleCors(
    req,
    res,
  );
  await CheckUserHandler.execute(
    req,
    res,
  );
}
