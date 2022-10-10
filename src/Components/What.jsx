import whatimg from "../Asset/picture/what-is-graphorm.jpg"
import styles from "./what.module.css"
import { useTranslation } from "react-i18next";

function What() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.h3_one}>
                    {t('what.title')}
                </h3>
                <h3 className={styles.h3_two}>
                    {t('what.head.first')} <span className=" text-danger">{t('what.head.red')}</span>{t('what.head.end')}
                </h3>
                <h3 className={`${styles.h3_three} `}>
                    <span className=" text-black"> {t('what.paragraph-one.normal')} {t('what.paragraph-one.normal')}</span>
                    <span>{t('what.paragraph-one.blue')}</span>
                </h3>
                <h3 className={styles.h3_four}>
                    <span className={`${styles.span}`}>{t('what.paragraph-two.normal')}</span> <span className=" text-danger">{t('what.paragraph-two.red')}</span>{t('what.paragraph-two.bold')}
                </h3>
                <h3 className={`${styles.h3_five}`} >
                    <span className={`${styles.span}`}>{t('what.paragraph-three.first')}</span>
                    <span className=' text-danger'>{t('what.paragraph-three.red')}</span>
                    <span>{t('what.paragraph-three.end')}</span>
                </h3>
            </div>
            <div className={styles.image}>
                <img className="w-75" src={whatimg} alt="" />
            </div>
        </div>
    );
}

export default What;