import Button from "../Components/common/Button";
import { useTranslation } from "react-i18next";
import { CoustomersItems } from "../constant/CoustomersItems";
import styles from './customers.module.css'


function Customers() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {t('customers.title')}
            </h3>
            <div className={styles.image_co}>
                {CoustomersItems.map((i) => {
                    return (
                        <li key={i.id} className={styles.image_div} >
                            <img className={styles.image} src={i.image} alt="" />
                        </li>
                    )
                })}
            </div>
            <div className={styles.div}>
                <h3 className={styles.div_title}>
                    {t('customers.card-title')}
                </h3>
                <Button
                    ptag={styles.ptag}
                    ActiveCname={styles.btn}
                    textCname={styles.textCname}
                    text={t('customers.card-btn')}
                />
            </div>
        </div>
    );
}

export default Customers;