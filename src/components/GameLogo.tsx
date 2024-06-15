import Image from 'next/image'
import { useState } from 'react'

type Props = {
  title: string
  logo: string
}

const GameLogo = ({ title, logo }: Props) => {
  const [hasError, setHasError] = useState(false)

  const fallbackImage =
    'https://www.downloadclipart.net/large/xbox-png-transparent.png'

  return (
    <Image
      alt={title}
      src={logo || ''}
      width={50}
      height={50}
      loader={({ src }) => (hasError ? fallbackImage : src)}
      className="w-12"
      onError={() => setHasError(true)}
    />
  )
}

export default GameLogo
