import { BgImage, Title } from '../atoms'
import { Image, Text, Box, Flex } from '@chakra-ui/react'

export function HomeBanner() {
  return (
    <BgImage image="images/home/Background.svg" size="lg">
      <Flex justifyContent="space-between">
        <Box>
          <Title color="light.white">5 Continentes, infinitas possibilidades.</Title>
          <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Box>
        <Image src="images/home/Airplane.svg" />
      </Flex>
    </BgImage>
  )
}
