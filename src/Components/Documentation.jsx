import styles from "./documentation.module.css"
import documentation from "../Asset/picture/complete-documentation-and-multimedia-data.jpg"
import { DocumentationItems } from "../constant/DocumentationItems";
import { useTranslation } from "react-i18next";

function Documentation() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.paragraph_title}>{t('documentation.title')}</h3>
                <ul>
                    {DocumentationItems.map((i) => {
                        return (
                            <li className={styles.paragraph_li} dangerouslySetInnerHTML={{ __html: t(i.text) }} />
                        )
                    })}
                </ul>
            </div>
            <div className={styles.image}>
                <img className={`${styles.image} w-100`} src={documentation} alt="datastealer" />
            </div>
        </div>
    );
}

export default Documentation;