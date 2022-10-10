import styles from "./cardslider.module.css"

function Card({ logo, title, discretion, avatar, name, titlejob }) {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.discretion}>{discretion}</p>
            <div className={styles.co_profile}>
                <img className={styles.avatar} src={avatar} alt="avatar" />
                <div className={styles.profile}>
                    <p className={styles.name}>{name}</p>
                    <h5 className={styles.jobTitle}>{titlejob}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;