import styles from "../../styles/AuthSignin.module.css";

const index = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_auth_container}>
        <div className={styles.imgDivContainer}>
          <h1>Adcraft</h1>
          <p>Copyright 2024</p>
        </div>
        <div className={styles.formDivContainer}>
          <div className={styles.formHeader}><p>New to Adcraft?</p> <button>Create Account</button></div>
          <h1>Sign in</h1>
          <p>
            Welcome back to Adcraft.
          </p>
          <div className={styles.mainFormContainer}>
            <div className={styles.inputContainer}>
              <p>Email Address</p>
              <input type="email" placeholder="example@email.com" />
            </div>

            <div className={styles.inputContainer}>
              <p>Password</p>
              <input type="password" placeholder="password" />
            </div>
          </div>
          <p><a href="#">Forgot Password?</a></p>
          <button type="submit">Log in</button>
          <div className={styles.hrContainer}>
            <hr />
            <p>OR</p>
          </div>
        </div>
      </div>

    </div>
  );
}


export default index;
