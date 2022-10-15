import styles from "./mainslider.module.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlidePrev from "./SlidePrev";
import SlideNext from "./SlideNext";
import SlideTitle from "./ActiveSlide";
import { useEffect, useRef, useState } from 'react';


function SwiperFlexible({ renderItem, item, slidesperview, onChangeIndex }) {

    return (
        <div className={styles.container}>
            <Swiper
                loop={true}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={slidesperview}
                speed={400}
                pagination={{ clickable: true }}
                onSlideChange={({ realIndex }) => onChangeIndex instanceof Function ? onChangeIndex(realIndex) : null}
                onSwiper={({ realIndex }) => onChangeIndex instanceof Function ? onChangeIndex(realIndex) : null}
            >
                {item.map((i, index) => {
                    return (
                        <SwiperSlide key={index} className={styles.swiperslide}>
                            {({ isActive }) => (
                                <div>
                                    {renderItem(i, isActive)}
                                </div>
                            )}
                        </SwiperSlide>
                    )
                })}
                <div className={styles.arrows} >
                    <SlideNext />
                    <SlidePrev />
                </div>
            </Swiper>
        </div>
    );
}

export default SwiperFlexible;
