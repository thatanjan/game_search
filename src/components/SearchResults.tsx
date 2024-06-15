import { Game } from '@/types/games'
import Link from 'next/link'
import fuzzySearch from '@/utils/search'
import data from '@/data.json'
import NoResult from './NoResult'
import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import GameLogo from './GameLogo'
import Loader from './Loader'
import ErrorOnSearch from './ErrorOnSearch'

interface Props {
  query: string
}

const SearchResultItem = ({
  title,
  release_year,
  logo,
  highlightedTitle = [],
}: Game) => (
  <Link href={`/game/${title}`}>
    <div className="flex gap-4 px-5 py-3 hover:bg-gray-500">
      <GameLogo title={title} logo={logo} />
      <h2 className="grow truncate">
        {highlightedTitle.map(({ text, matched }) => (
          <span className={matched ? 'bg-gray-600' : ''} key={text}>
            {text}
          </span>
        ))}
      </h2>

      <span className="shrink-0">{release_year}</span>
    </div>
  </Link>
)

const SearchResults = ({ query }: Props) => {
  const [result, setResult] = useState<Game[]>([])
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  // HACK: A hack to avoid flashing issue of <NoResult /> component
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false)

  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    const search = async () => {
      setLoading(true)
      setHasLoadedOnce(true)
      const { result, error } = await fuzzySearch(debouncedQuery, data)

      setHasError(error)
      setLoading(false)
      setResult(result)
    }

    search()
  }, [debouncedQuery])

  if (hasError) return <ErrorOnSearch />

  // Show loader when loading and no results are available
  if (loading && !result.length) return <Loader />

  return (
    <>
      {!!result.length && <hr className="bg-gray-200" />}

      <div className="max-h-[370px] overflow-y-auto">
        {result.map((game) => (
          <SearchResultItem {...game} key={game.title} />
        ))}

        {/* HACK: if no results found and loading is false and has loaded the data at least once */}
        {!result.length && !loading && hasLoadedOnce && <NoResult />}
      </div>
    </>
  )
}

export default SearchResults
