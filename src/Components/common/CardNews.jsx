import styles from "./cardnews.module.css"

function CardNews({ title, image, link }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img className={styles.image} src={image} alt="logo" />
            <a className={styles.link} href="##">{link}</a>
        </div>
    );
}

export default CardNews;