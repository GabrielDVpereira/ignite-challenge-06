import { Flex, Center } from '@chakra-ui/react'
import { Logo } from '../atoms'
import { Icon } from '@chakra-ui/react'
import { IoIosArrowBack } from 'react-icons/io'

interface HeaderProps {
  logoSrc: string
  logoAlt: string
  back?: boolean
  onClickLogo: () => void
  onClickBack?: () => void
}

export function Header({ logoSrc, logoAlt, back = false, onClickBack, onClickLogo }: HeaderProps) {
  return (
    <Flex w="100%" align="center" px="20" py="10">
      {back && <Icon as={IoIosArrowBack} onClick={onClickBack} cursor="pointer" />}
      <Center w="100%">
        <Logo src={logoSrc} alt={logoAlt} onClick={onClickLogo} cursor="pointer" />
      </Center>
    </Flex>
  )
}
