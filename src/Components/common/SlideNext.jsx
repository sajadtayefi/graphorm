import { useSwiper } from 'swiper/react';
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./slidenext.module.css"

export default function SlideNext() {
    const swiper = useSwiper();

    return (
        <div className={styles.container} >
            <button className={styles.btn}
                onClick={() => swiper.slideNext()}>
                <MdKeyboardArrowRight className={styles.icon} size={32} />
            </button>
        </div>
    );
}