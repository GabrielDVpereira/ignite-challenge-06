import { Box, Image, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CardWithImageProps extends BoxProps {
  children: ReactNode
}
export function CardWithImage({ children, ...rest }: CardWithImageProps) {
  return (
    <Box
      w="256px"
      h="279px"
      background="light.white"
      borderRadius="5px"
      mr={['20px', '45px']}
      mb="48px"
      flexShrink={0}
      {...rest}
    >
      <Image src="images/home/slider/oceania.jpg" w="100%" h="60%" borderRadius="5px 5px 0 0" />

      <Box
        w="100%"
        h="40%"
        borderRadius="0 0 5px 5px"
        borderColor="hightlight.main"
        borderWidth="0 1px 1px 1px"
      >
        {children}
      </Box>
    </Box>
  )
}
