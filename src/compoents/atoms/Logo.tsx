import { Image, ImageProps } from '@chakra-ui/react'

export function Logo(props: ImageProps) {
  return <Image {...props} borderRadius="none" boxSize="100px" />
}
