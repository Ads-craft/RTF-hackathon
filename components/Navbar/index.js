import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.nav_container_div}>
      {/* logo div */}
      <div>
        <h1>
          Ad<span className="text-light-pink">craft</span>
        </h1>
      </div>

      {/* link container */}
      <div className={styles.links_container_div}>
        <h1>
          <a href="#">Home</a>
        </h1>
        <h1>
          <a href="#">Marketplace</a>
        </h1>
        <h1>
          <a href="#">Explore</a>
        </h1>
        <h1>
          <a href="#">Signin</a>
        </h1>
      </div>

      {/* wallet btn container */}

      <div className={styles.btn_container_div}>
        <i className="fa fa-wallet"></i>Connect Wallet
      </div>
    </div>
  );
};

export default index;
