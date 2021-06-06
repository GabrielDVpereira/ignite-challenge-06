import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ContainerProps extends BoxProps {
  children: ReactNode
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Box px={['4', '28']} {...rest}>
      {children}
    </Box>
  )
}
