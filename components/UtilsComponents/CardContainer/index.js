
import styles from  "./index.module.css";
const index = ({ imgUrl,ethPrice,views,likes}) => {
  return( 
    <div>
    <div className={styles.card_bottom_wrapper}>
    <div className={styles.card_bottom}>
    <div><h3>Floor Price</h3></div>
    
   </div>
  </div>
  </div>);
};

export default index;
