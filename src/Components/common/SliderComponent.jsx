import styles from "./slidercomponent.module.css"
function SliderComponent({ li_one, li_two, li_three, li_four, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.li_container}>
        <ul className="">
          <li>
            {li_one}
          </li>
          <li>
            {li_two}
          </li>
          <li>
            {li_three}
          </li>
          <li>
            {li_four}
          </li>
        </ul>
      </div>
      <div className={`${styles.image_container}`}>
        <img className={`${styles.image} `} src={image} alt="GetFileAnonymous" />
      </div>
    </div>
  );
}

export default SliderComponent;