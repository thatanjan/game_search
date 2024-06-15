import { useState, useEffect } from 'react'

/**
 * Debounce hook to delay the execution of a function until after a certain amount of time has passed
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced value
 */
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    let handler: NodeJS.Timeout

    // Set a timeout to update debouncedValue after delay
    handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup function to clear timeout if value or delay changes
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
