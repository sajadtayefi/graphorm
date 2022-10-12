import styles from "./confusion.module.css"
import immediate from "../Asset/picture/immediate-availability-of-data.jpg"
import { ImmediateItems } from "../constant/ImmediateItems";
import { useTranslation } from "react-i18next";

function Immediate() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.paragraph_title}>{t('immediate.title')}</h3>
                <ul>
                    {ImmediateItems.map((i, index) => {
                        return (
                            <li key={index} className={styles.paragraph_li} dangerouslySetInnerHTML={{ __html: t(i.text) }} />
                        )
                    })}
                </ul>
            </div>
            <div className={styles.image}>
                <img className={`${styles.image} w-100`} src={immediate} alt="datastealer" />
            </div>
        </div>
    );
}

export default Immediate;