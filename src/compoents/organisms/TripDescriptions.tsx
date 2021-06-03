import { ImageWithTitle } from '../molecules'
import { SimpleGrid } from '@chakra-ui/react'

export function TripDescriptions() {
  return (
    <SimpleGrid mt={['8', '36']} columns={[2, 5]} w="100%" mx={['8', '0']}>
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
    </SimpleGrid>
  )
}
