import { useTranslation } from "react-i18next";
import enamad from "../Asset/icons/DEV-enamad.png"
import { FooterItems } from "../constant/FooterItems";
import styles from "./footer.module.css"

function Footer() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.footrco}>
                <div>
                    <img src={enamad} alt="" />
                </div>
                {FooterItems.map((i, index) => {
                    return (
                        <div key={index}>
                            <p className={styles.title}>
                                {t(i.title)}
                            </p>

                            {i.items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {t(item)}
                                    </li>
                                )
                            })}
                        </div>
                    )
                })}
                <div className={styles.newsletters}>
                    <h3 className={styles.newstitle}>
                        {t('footer.list-four.title')}
                    </h3>
                    <input name="input" className={styles.input} type="text" />
                    <label htmlFor="input">{t('footer.list-four.btn')}</label>
                </div>
            </div>
            <h3 className={styles.copyright}>
                {t('footer.copy&right')}
            </h3>
        </div>
    );
}

export default Footer