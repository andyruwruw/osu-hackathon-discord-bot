/**
 * The use of this function with an await allows the
 * function to wait a designated amount of time before
 * preceding.
 * 
 * A dirty solution to avoiding rate limits form Discord
 * during request heavy processes, such as command
 * registration and data syncing.
 */

/**
 * Promise that resolves in a certain amount of time.
 * 
 * @param {number} milliseconds How long to wait.
 * @returns {Promise<void>} Temporary promise.
 */
export const sleep = async (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
