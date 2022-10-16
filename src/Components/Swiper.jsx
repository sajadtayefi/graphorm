import { SwiperItem } from '../constant/SwiperItem'
import Button from './common/Button';
import styles from './swiper.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";


function Swiper() {
    const { t } = useTranslation();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {SwiperItem.map((i) => {
                return (
                    <div key={i.id} className={styles.container} >
                        <div className='d-flex flex-column  justify-content-center align-items-center'>
                            <h3 className={styles.h3}>{t(i.h3)}</h3>
                            <p className={styles.p}>{t(i.p)}</p>
                            <Button
                                ActiveCname={styles.btn}
                                text={t(i.btn)}
                            />
                        </div>
                        <img
                            className={i.imageCname}
                            src={i.image}
                            alt={i.alt}
                        />
                    </div>
                )
            })}
        </Slider>
    );
}

export default Swiper;