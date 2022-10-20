import styles from "./mainslider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlidePrev from "./SlidePrev";
import SlideNext from "./SlideNext";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


function SwiperFlexible({ breakpoints, renderItem, item, slidesperview, onChangeIndex, setSwiperInstance }) {
    const { t } = useTranslation();
    const [showSwiper, setShowSwiper] = useState(true);
    const [mounted, setMounted] = useState(false);
    const dir = t('dir');

    useEffect(() => {
        if (mounted) setShowSwiper(false);
    }, [dir]);

    useEffect(() => {
        if (showSwiper === false) setShowSwiper(true);
    }, [showSwiper]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={styles.container}>
            {showSwiper && (
                <Swiper
                breakpoints={breakpoints}
                    loop={true}
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={slidesperview}
                    speed={400}
                    pagination={{ clickable: true }}
                    onSlideChange={({ realIndex }) => onChangeIndex instanceof Function ? onChangeIndex(realIndex) : null}
                    onSwiper={instance => {
                        if (onChangeIndex instanceof Function) onChangeIndex(instance.realIndex);
                        if (setSwiperInstance instanceof Function) setSwiperInstance(instance);
                    }}

                >
                    {item.map((i, index) => {
                        return (
                            <SwiperSlide key={index} className={styles.swiperslide}>
                                {renderItem(i)}
                            </SwiperSlide>
                        )
                    })}
                    <div className={styles.arrows} >
                        <SlideNext />
                        <SlidePrev />
                    </div>
                </Swiper>
            )}
        </div>
    );
}

export default SwiperFlexible;
