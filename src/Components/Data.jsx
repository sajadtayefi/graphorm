import styles from "./data.module.css"
import datastealer from "../Asset/picture/data-repeat.jpg"
import { dataItem } from "../constant/DataItem";
import { useTranslation } from "react-i18next";

function Data() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.paragraph_title}>{t('data.title')}</h3>
                <ul>
                    {dataItem.map((i ,index) => {
                        return (
                            <li key={index} className={styles.paragraph_li} dangerouslySetInnerHTML={{ __html: t(i.text) }} />
                        )
                    })}
                </ul>
            </div>
            <div className={styles.image}>
                <img className={`${styles.image} w-100`} src={datastealer} alt="datastealer" />
            </div>
        </div>
    );
}

export default Data;