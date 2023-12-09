import styles from "./index.module.css";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

const index = ({ isTapped }) => {
  const linkVariant = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div
      className={
        isTapped
          ? styles.main_mobile_menu_container_open
          : styles.main_mobile_menu_container
      }
    >
      <div className={styles.mobile_container}>
        <div className={styles.mobile_links_container_div}>
          {isTapped && (
            <Link style={{ textDecoration: "none" }} href="/">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={linkVariant}
                transition={{
                  delay: 0.05,
                  type: "spring",
                }}
              >
                <a href="#">home</a>
              </motion.h1>
            </Link>
          )}

          {isTapped && (
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={linkVariant}
              transition={{
                delay: 0.15,
                type: "spring",
              }}
            >
              <a href="#">marketplace</a>
            </motion.h1>
          )}

          {isTapped && (
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={linkVariant}
              transition={{
                delay: 0.25,
                type: "spring",
              }}
            >
              <a href="#">explore</a>
            </motion.h1>
          )}

          {isTapped && (
            <Link style={{ textDecoration: "none" }} href="auth/signin">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={linkVariant}
                transition={{
                  delay: 0.35,
                  type: "spring",
                }}
              >
                <a href="#">signin</a>
              </motion.h1>
            </Link>
          )}
        </div>

        {/* wallet btn container */}

        {isTapped && (
          <motion.div
            style={{ position: "relative", top: "50%", left: "0px" }}
            whileTap={{ scale: 1.1 }}
            initial={{ opacity: 0, y: "40px" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.2, type: "spring" },
            }}
          >
            <div className={styles.btn_container_div}>
              <i className="fa fa-wallet"></i>connect wallet
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default index;
