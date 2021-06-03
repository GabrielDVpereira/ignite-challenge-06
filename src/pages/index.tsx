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
      <Box px="28" pb="18">
        <TripDescriptions />
        <Divider borderWidth="1px" borderColor="dark.black" width="24" mx="auto" my="16" />
        <Title
          fontWeight="normal"
          color="dark.headings"
          fontSize="36px"
          textAlign="center"
          lineHeight="1.2"
          mb="12"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Title>
        <ContinentsSwiper />
      </Box>
    </Box>
  )
}
