import styles from "./easyreporting.module.css"
import easy from "../Asset/picture/easy-data-reporting-and-analysis.jpg"
import { useTranslation } from "react-i18next";

function EasyReporting() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.paragraph_title}>{t('easy.title')}</h3>
                <p className={styles.paragraph_p}>{t('easy.paragraph-one')}</p>
                <p className={styles.paragraph_p}> {t('easy.paragraph-two')}</p>
                <h3 className={styles.paragraph_title2}>{t('easy.paragraph-title')}</h3>
            </div>
            <div className={styles.image}>
                <img className={`${styles.image} w-75`} src={easy} alt="datastealer" />
            </div>
        </div>
    );
}

export default EasyReporting;