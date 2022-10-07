import styles from "./confusion.module.css"
import confusion from "../Asset/picture/confusion.jpg"
import { confusionitems } from "../constant/ConfusionItem";
import { useTranslation } from "react-i18next";

function Confusion() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.paragraph_title}>{t('data.title')}</h3>
                <ul>
                    {confusionitems.map((i) => {
                        return (
                            <li className={styles.paragraph_li} dangerouslySetInnerHTML={{ __html: t(i.text) }} />
                        )
                    })}
                </ul>
            </div>
            <div className={styles.image}>
                <img className={`${styles.image} w-100`} src={confusion} alt="datastealer" />
            </div>
        </div>
    );
}

export default Confusion;