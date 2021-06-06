import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface BannerProps extends BoxProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  image: string
  bgShadow?: boolean
}

const heightBySize = {
  sm: '20vh',
  md: '30vh',
  lg: '50vh',
}

export function BgImage({ size, image, children, bgShadow = false, ...rest }: BannerProps) {
  const getBgImage = (): string => {
    let bgImage = ''
    if (bgShadow) bgImage = bgImage + 'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),'
    return bgImage + `url(${image})`
  }

  return (
    <Box width="100vw" height={heightBySize[size]} bgImage={getBgImage()} {...rest}>
      {children}
    </Box>
  )
}
