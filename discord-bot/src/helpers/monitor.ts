/**
 * Resets formatting.
 */
const RESET = '\x1b[0m';

/**
 * Format for different monitor layers.
 */
export const MonitorLayerNameFormat: Record<string, string> = {
  '0': '\x1b[90m', // DEBUG
  '1': '\x1b[91m', // WARNING
  '2': '\x1b[33m', // UPDATE
};
 
/**
 * Format for different monitor layers.
 */
export const MonitorLayerMessageFormat: Record<string, string> = {
  '0': '\x1b[90m', // DEBUG
  '1': '\x1b[37m', // WARNING
  '2': '\x1b[32m', // UPDATE
};
 
/**
 * Format for different monitor layers.
 */
export const MonitorLayerEnabled: Record<string, boolean> = {
  '0': true,
  '1': true,
  '2': true,
};
 
/**
 * Layers of monitor output.
 */
export const MonitorLayer: Record<string, number> = {
  DEBUG: 0,
  WARNING: 1,
  UPDATE: 2,
};
 
/**
 * Proxy to console.
 */
export class Monitor {
  /**
  * Print a statement to the console.
  *
  * @param {string} text Text to be printed.
  * @param {number} layer Layer to print text to.
  */
  static log(
    source: any,
    text: string,
    layer: number = 0,
  ) {
    if (MonitorLayerEnabled[`${layer}`]) {
      console.log(
        `${MonitorLayerNameFormat[`${layer}`]}[${source.name}]:${RESET}`,
        `${MonitorLayerMessageFormat[`${layer}`]}${text}${RESET}`,
      );
    }
  }
 
  /**
  * Displays memory update.
  */
  static memory() {
    const mbUsed = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;

    Monitor.log(
      Monitor,
      `Memory in Use: ${mbUsed} MB`,
      MonitorLayer.WARNING,
    );
  }
}
 