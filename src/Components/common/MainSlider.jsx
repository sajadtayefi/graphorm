import styles from "./mainslider.module.css"
import { SliderItems } from "../../constant/SliderItems";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlidePrev from "./SlidePrev";
import SlideNext from "./SlideNext";


function MainSlider({renderItem}) {
    return (
        <div>
            <Swiper
                loop={true}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                speed={400}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
            >
                {SliderItems.map((i) => {
                    return (
                        <SwiperSlide className={styles.swiperslide}>
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

export default MainSlider;
