interface Game {
  title: string
  logo: string
  genre: string
  release_year: number
  publisher: string
  highlightedTitle?: string // New field to include the highlighted title
}

export type { Game }
