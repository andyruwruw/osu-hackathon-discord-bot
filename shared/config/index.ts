/**
 * Database type enum.
 */
export const DATABASE_TYPES = {
  MONGO: 'mongodb',
  CACHE: 'cache',
};

/**
 * StOut escape code for resetting formatting.
 */
export const STD_OUT_ESCAPE_CODE_RESET = '\x1b[0m';

/**
 * Format for different monitor layers.
 */
export const STD_OUT_MONITOR_LAYER_NAME_FORMATING: Record<string, string> = {
  '0': '\x1b[90m', // DEBUG
  '1': '\x1b[91m', // WARNING
  '2': '\x1b[33m', // UPDATE
};

/**
 * Format for different monitor layers.
 */
export const STD_OUT_MONITOR_LAYER_MESSAGE_FORMATING: Record<string, string> = {
  '0': '\x1b[90m', // DEBUG
  '1': '\x1b[37m', // WARNING
  '2': '\x1b[37m', // UPDATE
};
