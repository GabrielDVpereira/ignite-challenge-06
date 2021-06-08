import { Flex, Text, Icon, Tooltip, Box } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface TextWithDescriptionProps {
  text: string
  description: string
  toltip?: string
}
export function TextWithDescription({ text, description, toltip }: TextWithDescriptionProps) {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text color="hightlight.main" fontSize={['24px', '30px']} fontWeight="600">
        {text}
      </Text>
      <Text fontSize={['18px', '24px']} whiteSpace="nowrap">
        {description}{' '}
        {toltip && (
          <Tooltip label={toltip}>
            <Box as="span">
              <Icon as={AiOutlineInfoCircle} cursor="pointer" w="13px" h="13px" color="dark.info" />
            </Box>
          </Tooltip>
        )}
      </Text>
    </Flex>
  )
}
