import { Image, ImageProps } from '@chakra-ui/react'

export function Logo(props: ImageProps) {
  return <Image borderRadius="none" width="12rem" height="2.8rem" {...props} />
}
