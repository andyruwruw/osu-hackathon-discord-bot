import { DISCORD_BASE_URL } from '../config';
import { Environment } from './environment';

export const createAuthorizationUrl = (): string => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: Environment.getDiscordClientId(),
    state: Environment.getState(),
  });

  return `${DISCORD_BASE_URL}/oauth2/authorize${params.toString()}`;
}