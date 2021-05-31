import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation, Pagination])

export function SwiperContainer() {
  return (
    <>
      <Swiper pagination={true} navigation={true}>
        <SwiperSlide>
          <div style={{ width: '100%', height: 200, backgroundColor: 'red' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: 200, backgroundColor: 'purple' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: 200, backgroundColor: 'blue' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: 200, backgroundColor: 'green' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: 200, backgroundColor: 'pink' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: 200, backgroundColor: 'yellow' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: 200, backgroundColor: 'orange' }} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
