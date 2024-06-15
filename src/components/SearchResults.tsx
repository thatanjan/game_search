import { Game } from '@/types/games'
import Link from 'next/link'
import Image from 'next/image'
import fuzzySearch from '@/utils/search'
import data from '@/data.json'

interface Props {
  query: string
}

const SearchResults = ({ query }: Props) => {
  const results = fuzzySearch(query, data)

  return (
    <div className="max-h-[370px] overflow-y-auto">
      {!!results.length && <hr className="bg-gray-200 hover:bg-gray-800" />}

      {results.map(({ title, release_year, logo, highlightedTitle }) => (
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
            <h2 className="grow truncate">{highlightedTitle}</h2>

            <span className="shrink-0">{release_year}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
