import { useSwiper } from 'swiper/react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./slideperv.module.css"

export default function SlidePrev() {
    const swiper = useSwiper();

    return (
        <div className={styles.container}>
            <button className={styles.btn}
                onClick={() => swiper.slidePrev()}>
                <MdKeyboardArrowLeft className={styles.icon} size={32} />
            </button>
        </div>
    );
}