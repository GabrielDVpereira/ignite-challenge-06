import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core'
import { ReactNode } from 'react'

SwiperCore.use([Navigation, Pagination, Autoplay])

interface SwiperContainerProps {
  sliders: ReactNode[]
}

export function SwiperContainer({ sliders }: SwiperContainerProps) {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      autoplay={true}
      loop={true}
      style={{ width: '100%' }}
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}
