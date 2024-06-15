import { Game } from '@/types/games'
import Link from 'next/link'
import Image from 'next/image'
import fuzzySearch from '@/utils/search'
import data from '@/data.json'
import NoResult from './NoResult'
import { useEffect, useState } from 'react'

interface Props {
  query: string
}

const SearchResults = ({ query }: Props) => {
  const [results, setResults] = useState<Game[]>([])
  // const results = fuzzySearch(query, data)

  useEffect(() => {
    const search = async () => {
      const results = await fuzzySearch(query, data)
      setResults(results)
    }

    search()
  }, [query])

  return (
    <>
      {!!results.length && <hr className="bg-gray-200" />}
      <div className="max-h-[370px] overflow-y-auto">
        {results.map(({ title, release_year, logo, highlightedTitle = [] }) => (
          <Link key={title} href={`/game/${title}`}>
            <div className="flex gap-4 px-5 py-3 hover:bg-gray-500">
              <Image
                alt={title}
                src={logo || ''}
                width={200}
                height={200}
                loader={({ src }) => src}
                className="w-5"
              />
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
        ))}

        {!results.length && <NoResult />}
      </div>
    </>
  )
}

export default SearchResults
