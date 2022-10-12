import { useTranslation } from 'react-i18next';
import benefits from '../Asset/picture/graphorm-benefits.png'
import styles from './adventage.module.css'

function Advantage() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <img className={`${styles.image} w-100 `} src={benefits} alt="" />
            <div className={`${styles.paragraph}`}>
                <p className={styles.p}>{t('Advantage.title-part-one')}</p>
                <h3 className={styles.h3_One}>{t('Advantage.title-part-two')}</h3>
                <h3 className={styles.h3_Two}>{t('Advantage.title-part-three')}</h3>
            </div>
        </div>
    );
}

export default Advantage;