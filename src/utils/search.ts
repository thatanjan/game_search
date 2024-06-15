import { Game } from '@/types/games'
import wait from './wait'

const fuzzySearch = async (query: string, games: Game[]) => {
  try {
    // Simulate a request to the server
    await wait(500)

    const lowerQuery = query.toLowerCase()

    const result = games
      .filter((game) => game.title.toLowerCase().includes(lowerQuery))
      .map((game) => {
        const title = game.title
        const lowerTitle = title.toLowerCase()
        const startIndex = lowerTitle.indexOf(lowerQuery)

        // If the query is found in the title
        if (startIndex !== -1) {
          const endIndex = startIndex + query.length

          // Highlight the matched part of the title
          const highlightedTitle = [
            { text: title.slice(0, startIndex), matched: false },
            { text: title.slice(startIndex, endIndex), matched: true },
            { text: title.slice(endIndex), matched: false },
          ]

          return { ...game, highlightedTitle }
        }

        return game
      })

    return {
      error: false,
      result,
    }
  } catch (error) {
    return {
      result: [],
      error: true,
    }
  }
}

export default fuzzySearch
