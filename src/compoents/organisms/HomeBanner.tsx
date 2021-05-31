import { BgImage, Title } from '../atoms'
import { Image, Text, Box, Flex } from '@chakra-ui/react'

export function HomeBanner() {
  return (
    <BgImage image="images/home/Background.svg" size="lg">
      <Flex justifyContent="space-between" h="100%" px="100px">
        <Box justifySelf="center" w="40%" overflow="bre">
          <Title color="light.white" fontSize="36px" fontWeight="normal">
            5 Continentes, <br /> infinitas possibilidades.
          </Title>
          <Text color="light.info" lineHeight="30px" fontSize="20px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image src="images/home/Airplane.svg" h="100%" mt="40px" />
      </Flex>
    </BgImage>
  )
}
