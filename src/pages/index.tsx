import { Divider } from '@chakra-ui/react'
import { Title } from '../compoents/atoms'
import { Container } from '../compoents/molecules'
import { HomeBanner, TripDescriptions, ContinentsSwiper } from '../compoents/organisms'
import { BasePage } from '../compoents/templates'

export default function Home() {
  return (
    <BasePage>
      <HomeBanner />
      <Container>
        <TripDescriptions />
        <Divider borderWidth="1px" borderColor="dark.black" width="24" mx="auto" my="16" />
        <Title
          fontWeight="normal"
          color="dark.headings"
          fontSize={['20px', '36px']}
          textAlign="center"
          lineHeight="1.2"
          mb="12"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Title>
      </Container>
      <ContinentsSwiper />
    </BasePage>
  )
}
