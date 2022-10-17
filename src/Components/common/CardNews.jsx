import styles from "./cardnews.module.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { useTranslation } from "react-i18next";

function CardNews({ title, image, link }) {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img className={styles.image} src={image} alt="logo" />
            <a className={styles.link} href="##">{link}
                {t('dir') === "rtl" ? <AiOutlineArrowLeft className={styles.icon} /> : <AiOutlineArrowRight className={styles.icon} />}

            </a>
        </div>
    );
}

export default CardNews;