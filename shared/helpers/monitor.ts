/**
 * This class replaces console.log for a more standardized
 * way of logging. It also will enable us to send logs to
 * a Discord channel for easier management.
 */

// Local Imports
import {
  STD_OUT_ESCAPE_CODE_RESET,
  STD_OUT_MONITOR_LAYER_MESSAGE_FORMATING,
  STD_OUT_MONITOR_LAYER_NAME_FORMATING,
} from '../config';

/**
 * Proxy to console.
 */
export class Monitor {
  /**
   * Layers of monitor output.
   */
  static Layer: Record<string, number> = {
    DEBUG: 0,
    WARNING: 1,
    UPDATE: 2,
  };

  /**
   * Whether the debug layer is active.
   */
  static _debugLayerActive = true;

  /**
   * Whether the warning layer is active.
   */
  static _warningLayerActive = true;

  /**
   * Whether the update layer is active.
   */
  static _updateLayerActive = true;

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
    if (Monitor._shouldLog(layer)) {
      console.log(
        `${STD_OUT_MONITOR_LAYER_NAME_FORMATING[`${layer}`]}[${source.name}]:${STD_OUT_ESCAPE_CODE_RESET}`,
        `${STD_OUT_MONITOR_LAYER_MESSAGE_FORMATING[`${layer}`]}${text}${STD_OUT_ESCAPE_CODE_RESET}`,
      );
    }
  }

  /**
   * Displays memory update.
   */
  static logMemory() {
    const mbUsed = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;

    Monitor.log(
      Monitor,
      `Memory in Use: ${mbUsed} MB`,
      Monitor.Layer.WARNING,
    );
  }

  /**
   * Returns whether or not the layer is active.
   * @param {number} layer Monitor layer.
   * @returns {boolean} Whether the layer is active.
   */
   static _shouldLog(layer: number) {
    if (layer === Monitor.Layer.DEBUG) {
      return Monitor._debugLayerActive;
    } else if (layer === Monitor.Layer.WARNING) {
      return Monitor._warningLayerActive;
    }
    return Monitor._updateLayerActive;
  }
}
  