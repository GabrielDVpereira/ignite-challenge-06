import { Box } from '@chakra-ui/react'
import { WorldTripHeader, HomeBanner } from '../compoents/organisms'

export default function Home() {
  return (
    <Box as="main">
      <WorldTripHeader />
      <HomeBanner />
    </Box>
  )
}
