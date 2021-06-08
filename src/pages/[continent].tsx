import { Flex, Text, HStack } from '@chakra-ui/react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Title } from '../compoents/atoms'
import { BannerByContinent } from '../compoents/organisms'
import { Container } from '../compoents/molecules'
import { BasePage, ContinentsBestCitiesList } from '../compoents/templates'

interface ContinentPageProps {
  continentName: string
}

export default function ContinentPage({ continentName }: ContinentPageProps) {
  return (
    <BasePage>
      <BannerByContinent continent={continentName} />
      <Container mt={['24px', '80px']}>
        <Flex mb={['32px', '80px']} flexDirection={['column', 'row']}>
          <Text fontSize={['14px', '24px']} lineHeight={['21px', '36px']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur ipsa!
            Nisi fugiat possimus laborum sit delectus soluta et assumenda modi, explicabo quia
            corporis magni eligendi expedita amet. Harum, illum!
          </Text>
          <HStack spacing="10" mt={['16px', '0']}>
            {[1, 2, 3].map((_, index) => (
              <Flex key={index} flexDirection="column" alignItems="center">
                <Text color="hightlight.main" fontSize={['24px', '30px']} fontWeight="600">
                  50
                </Text>
                <Text fontSize={['18px', '24px']}>Países</Text>
              </Flex>
            ))}
          </HStack>
        </Flex>

        <Title fontSize={['24px', '36px']} fontWeight="normal">
          Cidades +100
        </Title>

        <ContinentsBestCitiesList continent={continentName} />
      </Container>
    </BasePage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { continent: 'asia' } },
      { params: { continent: 'north_america' } },
      { params: { continent: 'south_america' } },
      { params: { continent: 'europe' } },
      { params: { continent: 'africa' } },
      { params: { continent: 'oceania' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params
  return {
    props: {
      continentName: continent,
    },
  }
}
