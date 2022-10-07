import styles from "./swiperapp.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SwiperBtnItems } from '../constant/SwiperBtnItems'
import Button from "./common/Button"
import { useTranslation } from "react-i18next";


function SwiperApp() {
    const { t } = useTranslation();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>انعطاف پذیر با امکاناتی بی نذیر</h3>

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
            <Slider {...settings}>

            </Slider>
        </div>
    );
}

export default SwiperApp;