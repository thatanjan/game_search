import { Game } from '@/types/games'

const fuzzySearch = (query: string, games: Game[]): Game[] => {
  const lowerQuery = query.toLowerCase()

  return games
    .filter((game) => game.title.toLowerCase().includes(lowerQuery))
    .map((game) => {
      const title = game.title
      const lowerTitle = title.toLowerCase()
      const startIndex = lowerTitle.indexOf(lowerQuery)

      if (startIndex !== -1) {
        const endIndex = startIndex + query.length

        const highlightedTitle = [
          { text: title.slice(0, startIndex), matched: false },
          { text: title.slice(startIndex, endIndex), matched: true },
          { text: title.slice(endIndex), matched: false },
        ]

        return { ...game, highlightedTitle }
      }

      return game
    })
}

export default fuzzySearch
