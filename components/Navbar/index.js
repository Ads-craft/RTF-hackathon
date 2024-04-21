import Link from "next/link";
import styles from "./index.module.css";
import { useRTFStore } from "@/store";
import { useEffect, useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const index = ({ isTapped, setIsTapped }) => {
  const [isTap, setIsTap] = useState(false);
  const { isAuth, isDarkmode, setIsDarkmode, setAuth } = useRTFStore(
    (state) => state
  );
  const { address } = useAccount();

  useEffect(() => {
    setAuth(address ? true : false);
  }, [address]);
  return (
    <div className={styles.nav_container_div}>
      {/* logo div */}
      <div>
        <Link style={{ textDecoration: "none" }} href="/">
          <h1 className="font-extrabold txt-2xl">
            Ad<span className="text-light-pink">Craft</span>
          </h1>
        </Link>
      </div>

      {/* link container */}
      <div className={styles.links_container_div}>
        <Link style={{ textDecoration: "none" }} href="/">
          <h1>
            <a href="#">Home</a>
          </h1>
        </Link>
        <Link style={{ textDecoration: "none" }} href="marketplace">
          <h1>
            <a href="#">Marketplace</a>
          </h1>
        </Link>
        <Link style={{ textDecoration: "none" }} href="explore">
          <h1>
            <a href="#">Explore</a>
          </h1>
        </Link>

        {/* <Link style={{ textDecoration: "none" }} href="auth/signin">
          <h1>
            <a href="#">Signin</a>
          </h1>
        </Link> */}
      </div>

      {/* wallet btn container */}

      {!isAuth ? (
        <ConnectKitButton />
      ) : (
        <div className={styles.authed_container}>
          <div className={styles.btn_container_div}>
            <b>Create your NFT</b>
          </div>
          <ConnectKitButton />
          <div className={styles.mode_toggle} onClick={() => setIsDarkmode()}>
            {isDarkmode ? (
              <i className="fa fa-sun"></i>
            ) : (
              <i className="fa fa-moon"></i>
            )}
          </div>
        </div>
      )}
      <div
        className={styles.ham_parent_container}
        onClick={() => setIsTapped(!isTapped)}
      >
        <div className={isTapped ? styles.ham_open : styles.ham}></div>
      </div>
    </div>
  );
};

export default index;
