import { Image, ImageProps } from '@chakra-ui/react'

export function Logo(props: ImageProps) {
  return (
    <Image
      borderRadius="none"
      width={['5rem', '12rem']}
      height={['1.25rem', '2.8rem']}
      {...props}
    />
  )
}
