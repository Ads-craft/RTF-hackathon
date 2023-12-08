import Link from "next/link";
import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.nav_container_div}>
      {/* logo div */}
      <div>
        <Link style={{ textDecoration: "none" }} href="/">
          <h1>
            Ad<span className="text-light-pink">craft</span>
          </h1>
        </Link>
      </div>

      {/* link container */}
      <div className={styles.links_container_div}>
        <Link href="/">
          <h1>
            <a href="#">Home</a>
          </h1>
        </Link>
        <h1>
          <a href="#">Marketplace</a>
        </h1>
        <h1>
          <a href="#">Explore</a>
        </h1>
        <Link href="auth/signin">
          <h1>
            <a href="#">Signin</a>
          </h1>
        </Link>
      </div>

      {/* wallet btn container */}

      <div className={styles.btn_container_div}>
        <i className="fa fa-wallet"></i>Connect Wallet
      </div>

      <div className={styles.ham_parent_container}>
        <div className={styles.ham_open}></div>
      </div>
    </div>
  );
};

export default index;
