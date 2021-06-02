import { Swiper } from '../molecules'
import { Image } from '@chakra-ui/react'

export function ContinentsSwiper() {
  const sliders = [
    <Image
      w="1240px"
      h="450px"
      src="images/home/slider/europe.jpg"
      alt="europe"
      key="europe"
      objectFit="cover"
    />,
    <Image
      w="1240px"
      h="450px"
      src="images/home/slider/north_america.jpg"
      alt="north_america"
      key="north_america"
      objectFit="cover"
    />,
    <Image
      w="1240px"
      h="450px"
      src="images/home/slider/south_america.jpg"
      alt="south_america"
      key="south_america"
      objectFit="cover"
    />,
    <Image
      w="1240px"
      h="450px"
      src="images/home/slider/asia.jpg"
      alt="asia"
      key="asia"
      objectFit="cover"
    />,
    <Image
      w="1240px"
      h="450px"
      src="images/home/slider/africa.jpg"
      alt="africa"
      key="africa"
      objectFit="cover"
    />,
    <Image
      w="1240px"
      h="450px"
      src="images/home/slider/oceania.jpg"
      alt="oceania"
      key="oceania"
      objectFit="cover"
    />,
  ]
  return <Swiper sliders={sliders} />
}
