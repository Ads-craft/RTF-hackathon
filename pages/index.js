import InfoContainer from "../components/UtilsComponents/InfoContainer/";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <p className="text-bold text-gray-50">Hello world</p>
        </div>
        <div className={styles.ai_container}>
          <div>
            <div></div>
            <div></div>
          </div>
          <h1>
            Generate <span>TikTok</span> Ads using <span>AI</span>
          </h1>
          <div>
            <img src={"/face_img.png"} />
          </div>
          <button>Get Started</button>
        </div>
        <div className={styles.goal_container}>
          <img src="/chain_logo.svg" />
          <h1>
            We utilize <span>chainlink</span> oracles for reliable external data
            sources in NFT <span>attributes</span> and transaction information
          </h1>
          <div className={styles.title_container}>
            <div>
              <i className="fa fa-user"></i>
            </div>
            <p>Project Manager</p>
          </div>
        </div>
        <div className={styles.mini_info_container}>
          <InfoContainer
            Icon={<i className="fa fa-rocket"></i>}
            Info={
              "Step into limitless creativity with our groundbreaking character generation interface designed to empower you to craft captivate your audience and elevate your advertising campaigns to new heights"
            }
          />
          <InfoContainer
            Icon={<i className="fa fa-bolt"></i>}
            Info={"Step into limitless creativity"}
          />
          <InfoContainer
            Icon={<i className="fa fa-bar-chart"></i>}
            Info={"Step into limitless creativity"}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
