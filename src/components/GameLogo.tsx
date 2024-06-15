import { title } from 'process'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  title: string
  logo: string
}

const GameLogo = ({ title, logo }: Props) => {
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      alt={title}
      src={logo || ''}
      width={20}
      height={20}
      loader={({ src }) =>
        hasError
          ? 'https://i.pinimg.com/originals/ab/fe/78/abfe78c9c67376a6c2a9732b9afe0e4a.png'
          : src
      }
      className="w-10 object-cover"
      onError={() => setHasError(true)}
    />
  )
}

export default GameLogo
