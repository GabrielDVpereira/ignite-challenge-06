import { Box } from '@chakra-ui/react'
import { WorldTripHeader, HomeBanner, TripDescriptions } from '../compoents/organisms'

export default function Home() {
  return (
    <Box as="main">
      <WorldTripHeader />
      <HomeBanner />
      <TripDescriptions />
    </Box>
  )
}
