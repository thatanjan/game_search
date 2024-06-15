import ErrorIcon from '@/components/icons/ErrorIcon'

const ErrorOnSearch = () => {
  return (
    <div className="grid justify-items-center gap-5 py-10 text-center">
      <ErrorIcon width={200} />
      <p className="text-2xl font-bold text-red-300">Something went wrong</p>
    </div>
  )
}

export default ErrorOnSearch
