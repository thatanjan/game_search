'use client'
import React, { useState } from 'react'

import ClearIcon from './icons/ClearIcon'
import SearchIcon from './icons/SearchIcon'
import SearchResults from './SearchResults'

type Props = {}

const SearchBox = (props: Props) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleClear = () => {
    setQuery('')
  }

  return (
    <div
      className={`rounded-3xl border border-gray-200 ${!!query ? 'pb-5' : 'pb-0'}`}
    >
      <div className="relative flex flex-nowrap items-center px-5 py-3">
        <SearchIcon className="shrink-0" />
        <input
          type="text"
          placeholder="Search for movies"
          className="w-full rounded-lg bg-transparent px-3 text-xl focus:outline-none"
          value={query}
          onChange={handleSearch}
          autoFocus
        />

        {!!query && (
          <button onClick={handleClear}>
            <ClearIcon />
          </button>
        )}
      </div>
      {!!query && <SearchResults query={query} />}
    </div>
  )
}

export default SearchBox
