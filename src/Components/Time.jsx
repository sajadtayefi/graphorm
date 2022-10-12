import saving_time from "../Asset/picture/saving-time.jpg"
import { TimeItem } from "../constant/TimeItem";
import styles from "./time.module.css"
import { useTranslation } from "react-i18next";


function Time() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <h2 className={styles.image_title} dangerouslySetInnerHTML={{ __html: t('time.image-title') }} />
                <img className={styles.image} src={saving_time} alt="" />
            </div>
            <div className={styles.paragraph}>
                <h3 className={styles.title_paragraph}>
                    {t('time.title')}
                </h3>
                <ul>
                    {TimeItem.map((i) => {
                        return (
                            <li key={i.id} className={`${styles.paragraph_li} ${i?.Cname}`}>
                                {t(i?.text)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Time;