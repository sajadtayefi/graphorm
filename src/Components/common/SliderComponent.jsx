import styles from "./slidercomponent.module.css"
function SliderComponent({ key,item, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.li_container}>
        <ul className="">
         {item}
        </ul>
      </div>
      <div className={`${styles.image_container}`}>
        <img className={`${styles.image} `} src={image} alt="GetFileAnonymous" />
      </div>
    </div>
  );
}

export default SliderComponent;