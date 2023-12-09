import styles from "./index.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const index = ({ isTapped }) => {
  return (
    <div
      className={
        isTapped
          ? styles.main_mobile_menu_container_open
          : styles.main_mobile_menu_container
      }
    >
      <div className={styles.mobile_container}>
        {/* Link container */}
        <div className={styles.mobile_links_container_div}>
          <Link style={{ textDecoration: "none" }} href="/">
            <h1>
              <a href="#">home</a>
            </h1>
          </Link>
          <h1>
            <a href="#">marketplace</a>
          </h1>
          <h1>
            <a href="#">explore</a>
          </h1>
          <Link style={{ textDecoration: "none" }} href="auth/signin">
            <h1>
              <a href="#">signin</a>
            </h1>
          </Link>
        </div>

        {/* wallet btn container */}

        <div className={styles.btn_container_div}>
          <i className="fa fa-wallet"></i>connect wallet
        </div>
      </div>
    </div>
  );
};

export default index;
