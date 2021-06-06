import { BgImage, Title } from '../atoms'
import { BoxProps } from '@chakra-ui/react'

interface BannerProps extends BoxProps {
  bannerImg: string
  bannerTitle: string
  size: 'sm' | 'md' | 'lg'
  fontSize?: number | string | string[]
  color?: string
}
export function Banner({ bannerImg, bannerTitle, size, fontSize, color, ...rest }: BannerProps) {
  return (
    <BgImage image={bannerImg} size={size} {...rest}>
      <Title fontSize={fontSize} color={color}>
        {bannerTitle}
      </Title>
    </BgImage>
  )
}
