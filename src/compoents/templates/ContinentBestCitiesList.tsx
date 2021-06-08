import { Flex } from '@chakra-ui/react'
import { CityCard } from '../organisms'
import { citiesByContinent } from '../../utils/citiesByContinent'

interface ContinentsBestCitiesListProps {
  continent: string
}
export function ContinentsBestCitiesList({ continent }: ContinentsBestCitiesListProps) {
  const cities = citiesByContinent[continent]
  return (
    <Flex mt={['20px', '40px']} flexWrap={['unset', 'wrap']} overflowX={['scroll', 'hidden']}>
      {cities.map((city, index) => (
        <CityCard key={index} country={city.country} imgSrc={city.src} name={city.name} />
      ))}
    </Flex>
  )
}
