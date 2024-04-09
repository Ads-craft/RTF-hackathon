import styles from "./index.module.css";
import { motion } from "framer-motion";

const index = ({ title, imgUrl, ethPrice, views, likes, is_stake, is_staked, }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <img src={imgUrl} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.bottom_wrapper}>
          {title && <h1>{title ? title : "MustardFaceNFT"}</h1>}
          <div className={styles.card_bottom_info_div}>
            <div>
              <h3>Floor Price:</h3>
              <h2>{ethPrice} Eth</h2>
            </div>
            <motion.div whileTap={{ scale: 1.2 }} style={{ outline: "none" }}>
              <div className={styles.card_btn_div}>
                {is_stake ? "Stake Now" : is_staked
                  ? "View Gains" : "Buy"}
              </div>
            </motion.div>
          </div>
          {is_stake || is_staked && (
            <div className={styles.stats}>
              <p>
                <i className="fa fa-eye"></i> {views}M Views
              </p>
              <p>
                <i className="fa fa-heart"></i> {likes}M Likes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
