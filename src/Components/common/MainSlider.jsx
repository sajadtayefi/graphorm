import styles from "./mainslider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlidePrev from "./SlidePrev";
import SlideNext from "./SlideNext";


function SwiperFlexible({ renderItem, item, slidesperview }) {
    return (
        <div className={styles.container}>
            <Swiper
                loop={true}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={slidesperview}
                speed={400}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
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
        </div>
    );
}

export default SwiperFlexible;
