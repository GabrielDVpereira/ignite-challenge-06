import { Box, Heading } from '@chakra-ui/react'
import { WorldTripHeader } from '../compoents/organisms'

export default function Home() {
  return (
    <Box as="main">
      <WorldTripHeader />
      <Heading>Home</Heading>
    </Box>
  )
}
