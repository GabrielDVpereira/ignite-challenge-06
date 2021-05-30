interface BannerByContinentProps {
  continent: 'south_america' | 'north_america' | 'africa' | 'asia' | 'europe' | 'oceania'
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
  const continentImg = `images/continents/${continent}`
  const continentName = continentNames[continent]

  return <Banner bannerImg={continentImg} bannerTitle={continentName} size="lg" />
}
