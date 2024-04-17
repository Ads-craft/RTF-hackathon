import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.createnft_container}>
      <h1>Create A Character NFT linked your Ad</h1>
      <div className={styles.textarea_container}><textarea className={styles.text_area}></textarea></div>
      <h1>Character Suggestion</h1>
      <div className={styles.textarea_container_2}><textarea className={styles.text_area}></textarea></div>
      <button className={styles.create_btn}>Create NFT</button>



    </div>
  );
}

export default index;
