import styles from "./affordable.module.css"
import affordableImage from "../Asset/picture/affordable.jpg"
import { affordableItem } from "../constant/AffordableItem";
import { useTranslation } from "react-i18next";

function Affordable() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3 className={styles.paragraph_title}>
                    {t('affordable.title')}
                </h3>
                <ul>
                    {affordableItem.map((i ,index) => {
                        return (
                            <li key={index} className={styles.paragraph_li} dangerouslySetInnerHTML={{ __html: t(i.text) }} />
                        );
                    })}
                </ul>
            </div>
            <div className={styles.image}>
                <img className={`${styles.image} w-100`} src={affordableImage} alt="affordableImage" />
            </div>
        </div>
    );
}

export default Affordable;