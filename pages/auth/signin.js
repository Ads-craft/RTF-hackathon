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
            <div>
              <p>Email Address</p>
              <input type="email" placeholder="example@email.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default index;
