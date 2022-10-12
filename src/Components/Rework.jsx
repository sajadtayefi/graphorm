import { useTranslation } from "react-i18next";
import styles from "./rework.module.css"
import rework_image from "../Asset/picture/rework.jpg"
import { ReworkItem } from "../constant/ReworkItem";


function Rework() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.paragraph_title}>
                    {t('rework.title')}
                </h3>
                <ul>
                    {ReworkItem.map((i) => {
                        return (
                            <li key={i.id} dangerouslySetInnerHTML={{ __html: t(i.text) }} className={`${styles.paragraph_li} ${i.Cname}`} />
                        )
                    })}
                </ul>
            </div>
            <div className={styles.image}>
                <img className={`w-100`} src={rework_image} alt="" />
            </div>
        </div>
    );
}

export default Rework;