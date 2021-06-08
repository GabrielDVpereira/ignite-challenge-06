import { Flex, VStack, Image, Text } from '@chakra-ui/react'
import { CardWithImage } from '../molecules'

interface CityCardProps {
  name: string
  country: string
  imgSrc: string
}

export function CityCard({ name, country, imgSrc }: CityCardProps) {
  return (
    <CardWithImage>
      <Flex w="100%" h="100%" alignItems="center" justifyContent="space-between" p="24px">
        <VStack alignItems="flex-start">
          <Text fontWeight="600">{name}</Text>
          <Text color="dark.info">{country}</Text>
        </VStack>
        <Image src={imgSrc} w="30px" h="30px" borderRadius="50%" alt={name} />
      </Flex>
    </CardWithImage>
  )
}
