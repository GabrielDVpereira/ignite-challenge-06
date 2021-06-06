import { BgImage, Title } from '../atoms'
import { Image, Text, Flex, useBreakpointValue } from '@chakra-ui/react'

export function HomeBanner() {
  const bgSize = useBreakpointValue<'md' | 'lg'>({ base: 'md', md: 'lg' })
  console.log(bgSize)
  return (
    <BgImage image="images/home/Background.svg" size={bgSize}>
      <Flex justifyContent="space-between" h="100%" px={['16px', '100px']}>
        <Flex flexDir="column" justifyContent="center" w={['100%', '40%']}>
          <Title
            color="light.white"
            fontSize={['20px', '36px']}
            fontWeight="normal"
            lineHeight={['2rem', '2.5rem']}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Title>
          <Text color="light.info" lineHeight="30px" fontSize={['14px', '20px']} mt="1rem">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image src="images/home/Airplane.svg" h="100%" mt="40px" display="none" />
      </Flex>
    </BgImage>
  )
}
