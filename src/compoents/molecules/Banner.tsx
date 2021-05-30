import { BgImage, Title } from '../atoms'

interface BannerProps {
  bannerImg: string
  bannerTitle: string
  size: 'sm' | 'md' | 'lg'
}
export function Banner({ bannerImg, bannerTitle, size }: BannerProps) {
  return (
    <BgImage image={bannerImg} size={size}>
      <Title>{bannerTitle}</Title>
    </BgImage>
  )
}
