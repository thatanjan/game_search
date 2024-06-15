import SearchIcon from '@/components/icons/SearchIcon'

const NoResult = () => {
  return (
    <div className="grid justify-items-center gap-5 py-10 text-center">
      <SearchIcon width={200} />
      <p className="text-2xl font-bold">Sorry, no results found</p>
    </div>
  )
}

export default NoResult
