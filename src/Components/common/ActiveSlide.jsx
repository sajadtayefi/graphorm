import { React } from 'react';
import { useSwiperSlide } from 'swiper/react';

export default function SlideTitle() {
  const swiperSlide = useSwiperSlide();

  return (
    <p>Current slide is {swiperSlide.isActive ? 'text-black' : 'text-danger'}</p>
  );
}