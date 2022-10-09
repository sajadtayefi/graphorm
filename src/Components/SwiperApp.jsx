import styles from "./swiperapp.module.css"
import { SwiperBtnItems } from '../constant/SwiperBtnItems'
import Button from "./common/Button"
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MainSlider from "./common/MainSlider";
import SliderComponent from "./common/SliderComponent";



function SwiperApp() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{t('swiperapp.title')}</h3>
            <div className={styles.btn_container}>
                {SwiperBtnItems.map((i) => {
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
            <div className="">
                <MainSlider
                    renderItem={i => (
                        <SliderComponent
                            li_one={t(i.li_one)}
                            li_two={t(i.li_two)}
                            li_three={t(i.li_three)}
                            li_four={t(i.li_four)}
                            image={i.image}
                        />
                    )}
                />
            </div>
        </div >
    );
}

export default SwiperApp;