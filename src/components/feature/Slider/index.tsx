import { Swiper, SwiperProps, SwiperRef } from "swiper/react";
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper";

import { ReactNode, useEffect, useState } from "react";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, EffectFade, Autoplay]} {...settings}>
      {children}
    </Swiper>
  );
};

export { Slider };
