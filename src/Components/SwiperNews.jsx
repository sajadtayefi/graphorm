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