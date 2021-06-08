import { Title } from '../atoms'
import { Flex, Image, useBreakpointValue, Box } from '@chakra-ui/react'

interface ImageWithDescriptionProps {
  imageSrc: string
  imageAlt: string
  description: string
}

export function ImageWithTitle({ imageSrc, imageAlt, description }: ImageWithDescriptionProps) {
  const isMobileVersion = useBreakpointValue({ base: true, md: true, lg: false })

  const getImageOrDot = () => {
    if (isMobileVersion) {
      return <Box height="8px" width="8px" borderRadius="50%" bg="hightlight.main" mr="4" />
    }

    return <Image src={imageSrc} alt={imageAlt} h="85px" w="85px" />
  }
  return (
    <Flex
      flexDirection={['row', 'column']}
      justifyContent={['start', 'center']}
      alignItems={'center'}
    >
      {getImageOrDot()}
      <Title fontSize={['18px', '24px']} color="dark.headings" mt={['0', '4']}>
        {description}
      </Title>
    </Flex>
  )
}
