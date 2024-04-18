import styles from "./index.module.css";
import { useRTFStore } from "../../../store";
import { useEffect } from "react";

const index = ({ progressState }) => {
  const setNFTCreationStage = useRTFStore((state) => state.setNFTCreationStage);
  const nftCreationStage = useRTFStore((state) => state.nftcreation_stage)

  useEffect(() => {
    alert(nftCreationStage)
  }, [nftCreationStage]);
  return (
    <div className={styles.progress_div}>
      <section onClick={() => setNFTCreationStage(1)} className={styles.progress_section}>
        <div className={nftCreationStage >= 1 ? styles.progress_indicators_active : styles.progress_section}>1</div> <p>Create your ads</p>
      </section>
      <section className={styles.progresshr_section}><hr /></section>
      <section onClick={() => setNFTCreationStage(2)} className={styles.progress_section}>
        <div className={nftCreationStage >= 2 ? styles.progress_indicators_active : styles.progress_indicators}>2</div> <p>Link Character Selection</p>
      </section>
      <section className={styles.progresshr_section}><hr /></section>
      <section className={styles.progress_section}>
        <div className={nftCreationStage >= 3 ? styles.progress_indicators_active : styles.progress_indicators}>3</div> <p>Edit and Perview</p>
      </section>

    </div>
  )
}


export default index;
