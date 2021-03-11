import { Children } from "react";

import SwiperCore, { Pagination, Navigation, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation, Keyboard]);

export const Slider = ({ children, ...restProps }) => {
  const params = {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: true,
    pagination: true,
    keyboard: {
      enabled: true,
    },
    roundLengths: true,
    centerInsufficientSlides: true,
    watchOverflow: true,
    threshold: 3,
  };

  return (
    <Swiper {...params} {...restProps}>
      {Children.toArray(children).map((child) => (
        <SwiperSlide key={child.key}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
