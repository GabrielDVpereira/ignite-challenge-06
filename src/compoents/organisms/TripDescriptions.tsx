import { ImageWithDescription } from '../molecules'
import { Flex } from '@chakra-ui/react'

export function TripDescriptions() {
  return (
    <Flex w="100%" justifyContent="space-around" mt="36">
      <ImageWithDescription
        description="vida noturna"
        imageSrc="images/home/cocktail.svg"
        imageAlt="cocktail"
      />
      <ImageWithDescription
        description="Praia"
        imageSrc="images/home/surf.svg"
        imageAlt="cocktail"
      />
      <ImageWithDescription
        description="moderno"
        imageSrc="images/home/building.svg"
        imageAlt="cocktail"
      />
      <ImageWithDescription
        description="Clássico"
        imageSrc="images/home/museum.svg"
        imageAlt="cocktail"
      />
      <ImageWithDescription
        description="e mais..."
        imageSrc="images/home/earth.svg"
        imageAlt="cocktail"
      />
    </Flex>
  )
}
