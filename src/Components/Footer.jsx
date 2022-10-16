import { useTranslation } from "react-i18next";
import enamad from "../Asset/icons/DEV-enamad.png"
import { FooterItems } from "../constant/FooterItems";
import styles from "./footer.module.css"
import Button from './common/Button.jsx'
import { SiInstagram } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si'




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
                                    <li className={styles.li} key={index}>
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
                    <div className={styles.list_four}>
                        <div className={styles.input_co}>
                            <input name="input" className={styles.input} type="text" />
                            <Button
                                text={t('footer.list-four.btn')}
                                ptag={styles.ptag}
                                ActiveCname={styles.btn}
                            />
                        </div>
                        <div className="">
                            <SiInstagram className="mx-3 my-3" size={24} />
                            <FaTwitter className="mx-3 my-3" size={24} />
                            <SiLinkedin className="mx-3 my-3" size={24} />
                        </div>

                    </div>
                </div>
            </div>
            <h3 className={styles.copyright}>
                
                {t('footer.copy&right')}
            </h3>
        </div>
    );
}

export default Footer