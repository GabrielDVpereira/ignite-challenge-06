import { Text, TextProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TitleProps extends TextProps {
  children: ReactNode
  fontWeight?: 'normal' | 'semibold' | 'bold'
}

export function Title({ children, fontWeight = 'semibold', ...rest }: TitleProps) {
  return (
    <Text
      fontSize={['xs', 'xl']}
      color="dark.black"
      isTruncated
      noOfLines={[1, 2, 3]}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </Text>
  )
}
