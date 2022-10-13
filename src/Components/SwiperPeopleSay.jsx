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
                    renderItem={i => (
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