import { HStack } from '@chakra-ui/react'
import { TextWithDescription } from '../molecules'

export function ContinentInfo() {
  return (
    <HStack spacing="10" mt={['16px', '0']}>
      <TextWithDescription text="50" description="países" />
      <TextWithDescription text="60" description="línguas" />
      <TextWithDescription
        text="27"
        description="cidades +100"
        toltip="Lorem ipsum dolor sit amet"
      />
    </HStack>
  )
}
