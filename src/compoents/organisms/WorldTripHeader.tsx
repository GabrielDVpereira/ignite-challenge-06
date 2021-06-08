import { Header } from '../molecules'
import { useRouter } from 'next/router'

export function WorldTripHeader() {
  const router = useRouter()

  const shouldHaveGoback = router.asPath !== '/'

  return (
    <Header
      logoSrc="/images/Logo.svg"
      logoAlt="World Trip"
      onClickLogo={() => router.push('/')}
      back={shouldHaveGoback}
      onClickBack={shouldHaveGoback && (() => router.push('/'))}
    />
  )
}
