import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.ep_main_container}> <div className={styles.edit_container}><i className="fas fa-edit"></i> <h1>Edit</h1></div>
      <div className={styles.form_container}>
        <div className={styles.train_input}>
          <input type="title" placeholder="Title" />
        </div>
        <div className={styles.train_input}>
          <input type="text" placeholder="Tagline" />
        </div>
        <div className={styles.image_container}>
          <div className={styles.train_input}>
            <h1>Product</h1>
            <i className="fa-solid fa-image"></i>
            <input type="file" placeholder="Title" />
          </div>
          <div className={styles.train_input}>
            <h1>NFT Character</h1>
            <i className="fa-solid fa-image"></i>
            <input type="file" placeholder="Tagline" />
          </div>

        </div>
      </div>
      <div className={styles.utils_container}>
        <button className={styles.create_btn}><span>Preview Ad</span></button>
        <button className={styles.create_btn}>Upload Ad</button>
        <i className="fa fa-share-alt"></i>

        <i className="fa fa-download"></i>



      </div>
    </div>
  );

}

export default index;
