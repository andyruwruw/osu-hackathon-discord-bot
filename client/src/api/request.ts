// Packages
import axios from 'axios';

// Local Imports
import { Environment } from '../helpers/environment';

/**
 * Axios instance for API.
 */
export const request = axios.create({
  baseURL: `${Environment.getApiUrl()}/api`,
});
