import SearchBox from '@/components/SearchBox'
import fuzzySearch from '@/utils/search'

import data from '../data.json'

const Home = () => {
  console.log(fuzzySearch('the', data))
  return (
    <main>
      <div className="mx-auto max-w-[800px] px-5">
        <h1 className="mb-10 mt-[200px] text-center text-7xl font-bold">
          Game Search
        </h1>
        <SearchBox />
      </div>
    </main>
  )
}

export default Home
