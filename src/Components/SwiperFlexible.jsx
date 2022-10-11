import styles from "./swiperflexible.module.css"
import { SwiperBtnItems } from '../constant/SwiperBtnItems'
import Button from "./common/Button"
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MainSlider from "./common/MainSlider";
import SliderComponent from "./common/SliderComponent";
import { SliderItems } from "../constant/SwiperFlexibleItems"




function SwiperApp() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{t('swiperapp.title')}</h3>
            <div className={styles.btn_container}>
                {SwiperBtnItems.map((i, index) => {
                    return (
                        <>
                            <Button
                                key={i?.id}
                                Cname={styles?.btn}
                                ptag={styles?.ptag}
                                text={t(i?.title)}
                                Icon={i?.icon}
                                IconCname={styles.icon_cname}
                                textCname={styles.textCname}
                            />
                        </>
                    )
                })}
            </div>
            <div>
                <MainSlider
                    slidesperview={1}
                    item={SliderItems}
                    renderItem={i => (
                        <SliderComponent
                            image={i.image}
                            item={i.item.map((item) => {
                                return (
                                    <li>
                                        {t(item)}
                                    </li>
                                )
                            })}
                        />
                    )}
                />
            </div>
        </div >
    );
}

export default SwiperApp;