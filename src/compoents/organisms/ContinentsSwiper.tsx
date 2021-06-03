import { Swiper } from '../molecules'
import { BgImage, Title } from '../atoms'
import { Text } from '@chakra-ui/react'

const contients = [
  { id: 'europe', description: 'O continente mais antigo', name: 'Europa' },
  { id: 'north_america', description: 'Paisagens de outro mundo', name: 'América do Norte' },
  { id: 'south_america', description: 'Praias de tirar o fôlego', name: 'América do Sul' },
  { id: 'asia', description: 'Cultura única', name: 'Ásia' },
  { id: 'africa', description: 'Vida selvagem', name: 'África' },
  { id: 'oceania', description: 'Beleza exótica', name: 'Oceania' },
]

export function ContinentsSwiper() {
  const sliders = contients.map((continent) => (
    <BgImage
      key={continent.id}
      w="100%"
      h={['250px', '450px']}
      image={`images/home/slider/${continent.id}.jpg`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      bgShadow={true}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Title color="light.white" fontSize={['24px', '48px']} textAlign="center">
        {continent.name}
      </Title>
      <Text color="light.white" fontSize={['14px', '24px']} fontWeight="700">
        {continent.description}
      </Text>
    </BgImage>
  ))
  return <Swiper sliders={sliders} />
}
