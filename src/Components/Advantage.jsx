import benefits from '../Asset/picture/graphorm-benefits.png'
import styles from './adventage.module.css'

function Advantage() {
    return (
        <div className={styles.container}>
            <img className={`${styles.image} w-100 `} src={benefits} alt="" />
            <div className={`${styles.paragraph}`}>
                <p className={styles.p}>در عملیات جمع آوری داده های مکانی</p>
                <h3 className={styles.h3_One}>تلفن همراهتان را جایگزین فرم های کاغذی کنید.</h3>
                <h3 className={styles.h3_Two}> خطا ها و آسیب های ناشی از برداشت کاغذی اطلاعات را از بین ببرید.</h3>
            </div>
        </div>
    );
}

export default Advantage;