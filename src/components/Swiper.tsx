Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CartItem from "./CartItem";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";


const Swiper = () => {
    return (
        <>
        <Swiper
  navigation={true}
  modules={[Navigation]}
  slidesPerView={4}
  spaceBetween={36}
  className="mySwiper"
>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
  <SwiperSlide>
    <CartItem />
  </SwiperSlide>
            </Swiper>
        </>
   

  )
}

export default Swiper



