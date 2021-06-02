import { Title } from '../atoms'
import { Flex, Image } from '@chakra-ui/react'

interface ImageWithDescriptionProps {
  imageSrc: string
  imageAlt: string
  description: string
}

export function ImageWithTitle({ imageSrc, imageAlt, description }: ImageWithDescriptionProps) {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={imageSrc} alt={imageAlt} h="85px" w="85px" />
      <Title fontSize="24px" color="dark.headings" mt="4">
        {description}
      </Title>
    </Flex>
  )
}
