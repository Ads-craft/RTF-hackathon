import styles from "../../styles/AuthSignup.module.css";
import Link from "next/link";

const index = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_auth_container}>
        <div className={styles.imgDivContainer}>
          <h1>Adcraft</h1>
          <p>Copyright 2024</p>
        </div>
        <div className={styles.formDivContainer}>
          <div className={styles.formHeader}><p>Already on Adcraft?</p>    <Link style={{ textDecoration: "none" }} href="/auth/signin">
            <button>Login</button></Link> </div>
          <h1>Sign up</h1>
          <p>
            Welcome to Adcraft.
          </p>
          <div className={styles.mainFormContainer}>   <div className={styles.inputContainer}>
            <p>Username</p>
            <input type="text" placeholder="newuser" />
          </div>
            <div className={styles.inputContainer}>
              <p>Email Address</p>
              <input type="email" placeholder="example@email.com" />
            </div>
            <div className={styles.inputContainer}>
              <p>Password</p>
              <input type="password" placeholder="password" />
            </div>
            <div className={styles.inputContainer}>
              <p>Confirm Password</p>
              <input type="password" placeholder="password" />
            </div>


          </div>
          <button type="submit">Sign up</button>
          <div className={styles.hrContainer}>
            <hr />
            <p>OR</p>
          </div>
          <div className={styles.logoContainer}>
            <img src={"/images/gmail-logo.png"} />
            <img src={"/images/tiktok-logo.png"} />
          </div>

          <div className={styles.linksContainer}>
            <a href="#">Terms & Conditions</a>
            <a href="#">Legal</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>

    </div>
  );
}


export default index;
