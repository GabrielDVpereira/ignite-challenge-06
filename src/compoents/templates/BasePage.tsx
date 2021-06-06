import { Fade, Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { WorldTripHeader } from '../organisms'

interface BasePageProps extends BoxProps {
  children: ReactNode
}

export function BasePage({ children, ...rest }: BasePageProps) {
  return (
    <Fade in>
      <Box as="main" overflowX="hidden" {...rest}>
        <WorldTripHeader />
        {children}
      </Box>
    </Fade>
  )
}
