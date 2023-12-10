import styles from "./index.module.css";
import arrow_svg from "../../public/arrow.svg";

const index = () => {
  return (
    <div className={styles.main_footnavbar}>
      <div className={styles.main_info_footnavbar}>
        <div className={styles.footnavbar_tab_1}>
          <h1>
            Ad<span>Craft</span>
          </h1>
          <p>
            Lorem ipsum reprehenderit enim labore culpa sint ad nisi Lorem
            pariatur mollit
          </p>
          <div className={styles.footnavbar_tab_1_icons}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>

          <div className={styles.footnavbar_tab_form}>
            <input type="text" placeholder="send us a mail" />
            <button>
              <img src={"../../public/images/arrow.png"} />
            </button>
          </div>
        </div>
        <div className={styles.footnavbar_tab_2}>
          <h1>Quick link</h1>

          <div className={styles.footnavbar_tab_2_info}>
            <p>
              <a href="#">Donate</a>
            </p>
            <p>
              <a href="#">Sign in</a>
            </p>
            <p>
              <a href="#">Services</a>
            </p>
            <p>
              <a href="#">How it work's</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
          </div>
        </div>
        <div className={styles.footnavbar_tab_2}>
          <h1>Contact</h1>

          <div className={styles.footnavbar_tab_2_info}>
            <p>
              <i className="fa fa-phone"></i> (406) 222-0120
            </p>
            <p>
              <i className="fa fa-envelope"></i> adcraft@gmail.com
            </p>
            <p>
              <i className="fa fa-map-marker"></i> 2972 Weinchester Rd,Santa An
              Illionis 85486
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.copyright_container}>
        <h1>© Copyright by AdCraft</h1>
      </div>
    </div>
  );
};

export default index;
