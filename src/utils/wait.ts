/**
 * Wait for a given amount of time
 * @param ms - The amount of time to wait in milliseconds
 * @returns A promise that resolves after the given amount of time
 */
const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default wait
