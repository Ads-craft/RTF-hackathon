import styles from "./index.module.css";


const index = () => {
  return (
    <div className={styles.create_ads_container}>
      <h1>Let your creativity shine and give us a clear picture <br /> with your words</h1>
      <p>Select the types of Ads</p>
      <div className={styles.ads_selector}>
        <div><input type="radio" /> Picture based</div>
        <div><input type="radio" /> Video based</div>
      </div>
      <div className={styles.train_container}>
        <p>Experiment and Train Model as per your Preferences</p>
        <div className={styles.train_input}>
          <input type="text" placeholder="Name" />
        </div>
        <div className={styles.train_input}>
          <input type="text" placeholder="Symbol" />
        </div>
        <div className={styles.train_input}>
          <input type="text" placeholder="Type" />
        </div>

      </div>
      <h1 className={styles.text_desc}>We are excited to bring your ads to life but first we need your input,please provide us <br /> witha brief description of what your product is about or <span>generate random tagline.</span></h1>
      <div className={styles.textarea_container}><textarea className={styles.text_area}></textarea></div>
      <button className={styles.create_btn}>Generate Ads</button>

    </div>
  );
}


export default index;
