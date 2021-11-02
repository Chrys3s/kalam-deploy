/**
 * @description: This function will help us pause the webpage
 * @param {Number} milliseconds
 * @returns
 */

export async function sleepInMilliseconds(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
