import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface BannerProps extends BoxProps {
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  image: string
}

const heightBySize = {
  sm: '20vh',
  md: '30vh',
  lg: '50vh',
}

export function BgImage({ size, image, children, ...rest }: BannerProps) {
  return (
    <Box {...rest} width="100vw" height={heightBySize[size]} bgImage={`url(${image})`}>
      {children}
    </Box>
  )
}
