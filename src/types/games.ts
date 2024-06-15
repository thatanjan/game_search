interface Game {
  title: string
  logo: string
  genre: string
  release_year: number
  publisher: string
  highlightedTitle?: {
    text: string
    matched: boolean
  }[]
}

export type { Game }
