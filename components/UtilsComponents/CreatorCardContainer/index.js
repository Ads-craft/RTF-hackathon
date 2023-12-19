import styles from "./index.module.css";

const index = ({ userName, userTag, userImg, likes, views }) => {
  return (
    <div className={styles.main_creator_card}>
      <div className={styles.img_info_container}>
        <img src={userImg} />
        <h1>{userName}</h1>
        <h3>@{userTag}</h3>
      </div>
      <div className={styles.icon_container}>
        <p>
          <i className="fa fa-heart"></i> <b>{likes}M</b>
        </p>
        <p>
          <i className="fa fa-eye"></i> <b>{views}B</b>
        </p>
      </div>
    </div>
  );
};

export default index;
