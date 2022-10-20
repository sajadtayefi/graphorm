import { useTranslation } from "react-i18next";
import styles from "./swiperpeoplesay.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cardslider from "./common/CardSlider"
import MainSlider from "./common/MainSlider";
import { peopleItems } from "../constant/SwiperPeopleItems";
import { FaQuoteRight } from "react-icons/fa"




function SwiperPeopleSay() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>

            <h2 className={styles.title}>
                <FaQuoteRight />
                <span>
                    {t('people-say.title')}
                </span>
            </h2>
            <div className={styles.slider}>
                <MainSlider
                    slidesperview={2}
                    item={peopleItems}
                    breakpoints={
                        {
                              // when window width is >= 140px
                              140: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
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
                                slidesPerView: 1
                            }
                            // when window width is >= 768px
                            , 768: {
                                slidesPerView: 1
                            }
                            // when window width is >= 1024px
                            , 1024: {
                                slidesPerView: 2,
                            }
                            // when window width is >= 1200px
                            , 1200: {

                            }
                        }}
                    renderItem={(i) => (
                        <Cardslider
                            logo={i.logo}
                            title={t(i.title)}
                            discretion={t(i.paragrph)}
                            avatar={i.avatar}
                            name={t(i.name)}
                            titlejob={t(i.jobtitle)}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default SwiperPeopleSay;