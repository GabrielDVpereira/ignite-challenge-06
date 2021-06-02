import { ImageWithTitle } from '../molecules'
import { Flex } from '@chakra-ui/react'

export function TripDescriptions() {
  return (
    <Flex w="100%" justifyContent="space-between" mt="36">
      <ImageWithTitle
        description="vida noturna"
        imageSrc="images/home/cocktail.svg"
        imageAlt="cocktail"
      />
      <ImageWithTitle description="Praia" imageSrc="images/home/surf.svg" imageAlt="cocktail" />
      <ImageWithTitle
        description="moderno"
        imageSrc="images/home/building.svg"
        imageAlt="cocktail"
      />
      <ImageWithTitle
        description="Clássico"
        imageSrc="images/home/museum.svg"
        imageAlt="cocktail"
      />
      <ImageWithTitle
        description="e mais..."
        imageSrc="images/home/earth.svg"
        imageAlt="cocktail"
      />
    </Flex>
  )
}
