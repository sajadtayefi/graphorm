import whatimg from "../Asset/picture/what-is-graphorm.jpg"
import styles from "./what.module.css"
import { useTranslation } from "react-i18next";

function What() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.h3_one}  >
                    {t('what.main-title')}
                </h3>
                <h3 className={styles.h3_two} dangerouslySetInnerHTML={{ __html: t('what.title') }} />
                <h3 className={`${styles.h3_three} `} dangerouslySetInnerHTML={{ __html: t('what.paragraph-one') }} />
                <h3 className={styles.h3_four} dangerouslySetInnerHTML={{ __html: t('what.paragraph-two') }} />
                <h3 className={`${styles.h3_five}`} dangerouslySetInnerHTML={{ __html: t('what.paragraph-three') }} />
            </div>
            <div className={styles.image}>
                <img className="w-75" src={whatimg} alt="whatimg" />
            </div>
        </div>
    );
}

export default What;