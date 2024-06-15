const Loader = () => (
  <div className="flex h-40 items-center justify-center space-x-2">
    <span className="sr-only">Loading...</span>
    <div className="h-8 w-8 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
    <div className="h-8 w-8 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
    <div className="h-8 w-8 animate-bounce rounded-full bg-white"></div>
  </div>
)

export default Loader
