import { useTranslation } from "react-i18next";
import styles from "./swipernews.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MainSlider from "./common/MainSlider";
import { SwiperNewsItems } from "../constant/SwiperNewsItem";
import CardNews from "./common/CardNews";



function SwiperNews() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {t('swiper-news.title')}
            </h2>
            <div className={styles.slider}>
                <MainSlider
                    slidesperview={3}
                    item={SwiperNewsItems}
                    breakpoints={
                        {
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            }
                            // when window width is >= 480px
                            , 480: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            }
                            // when window width is >= 640px
                            , 640: {
                                slidesPerView: 1,
                            }
                            // when window width is >= 768px
                            , 768: {
                                slidesPerView:2,
                            }
                            // when window width is >= 1024px
                            , 1024: {
                                slidesPerView:2,
                            }
                            // when window width is >= 1200px
                            , 1200: {
                                slidesPerView:3,
                            }
                        }}
                    renderItem={i => (
                        <CardNews
                            title={t(i.title)}
                            link={t(i.link)}
                            image={i.image}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default SwiperNews;