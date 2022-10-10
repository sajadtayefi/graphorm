import { useTranslation } from "react-i18next";
import styles from "./peoplesay.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cardslider from "../Components/common/CardSlider"
import MainSlider from "./common/MainSlider";
import { peopleItems } from "../constant/SwiperPeopleItems";



function PeopleSay() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {t('people-say.title')}
            </h2>
            <MainSlider
                slidesperview={2}
                item={peopleItems}
                renderItem={i => (
                    <Cardslider

                        logo={i.logo}
                        title={t(i.title)}
                        discretion={t(i.paragrph)}
                        avatar={i.avatar}
                    />
                )}
            />
        </div>
    );
}

export default PeopleSay;