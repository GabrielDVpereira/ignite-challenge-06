import { Box, Divider } from '@chakra-ui/react'
import { Title } from '../compoents/atoms'
import {
  WorldTripHeader,
  HomeBanner,
  TripDescriptions,
  ContinentsSwiper,
} from '../compoents/organisms'

export default function Home() {
  return (
    <Box as="main">
      <WorldTripHeader />
      <HomeBanner />
      <Box px="24">
        <TripDescriptions />
        <Divider borderWidth="1px" borderColor="dark.black" width="24" mx="auto" />
        <Title fontWeight="normal" color="dark.headings" fontSize="36px" textAlign="center">
          Vamos nessa? <br />
          Então escolha seu continente
        </Title>
        <ContinentsSwiper />
      </Box>
    </Box>
  )
}
