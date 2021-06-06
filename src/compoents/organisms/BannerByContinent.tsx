interface BannerByContinentProps {
  continent: string
}
import { Banner } from '../molecules'

const continentNames = {
  south_america: 'América do Norte',
  north_america: 'América do Sul',
  africa: 'África',
  asia: 'Ásia',
  europe: 'Europa',
  oceania: 'Oceania',
}

export function BannerByContinent({ continent }: BannerByContinentProps) {
  const continentImg = `images/home/slider/oceania.jpg`
  const continentName = continentNames[continent]

  return (
    <Banner
      backgroundRepeat="no-repeat"
      bannerImg={continentImg}
      bannerTitle={continentName}
      size="lg"
      objectFit="cover"
      height={['150px', '500px']}
      display="flex"
      alignItems={['center', 'flex-end']}
      justifyContent={['center', 'flex-start']}
      pl={['0', '140px']}
      pb={['0', '60px']}
      fontSize={['28px', '48px']}
      color="light.white"
    />
  )
}
