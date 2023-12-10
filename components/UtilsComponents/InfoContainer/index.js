import styles from "./index.module.css";

const index = ({ Icon, Info }) => {
  return (
    <div className={styles.container}>
      <p>
        <div>{Icon}</div>
      </p>
      <p>{Info}</p>
    </div>
  );
};

export default index;
