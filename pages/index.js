import InfoContainer from "../components/UtilsComponents/InfoContainer/";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <div>
        <div className={styles.main_info_container}>
          <h1>
            Our One_Stop Shop for Effortless <span>TikTok</span> Ads
          </h1>
          <p>
            The Ultimate TikTok Ads and NFT Creation Platform that empower yout
            to effortlessly create captivating TikTom ads and and design
            stunning digitial accessoires ad NFT featuring AI - generated
            characters.
          </p>
          <button>Get Started</button>
        </div>
        <div className={styles.logos_container}>
          <img src={"/tiktok.svg"} />
          <img src={"/dalle.svg"} />
          <img src={"/gpt_4.svg"} />
          <img src={"/chain_logo.svg"} />
        </div>
        <div className={styles.ai_container}>
          <div className={styles.empowerment_container}>
            <div className={styles.emain_info_container}>
              <h1>Empowerment</h1>
              <p>
                Provide creators with a platform to monetize their creativity by
                leveraging the reach and engagement of TikTok Ads and their
                innovative potential of NFTs.
              </p>
              <button>Get Started</button>
            </div>
            <div>
              <img src={"/emp_img.png"} />
            </div>
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
            <br />
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
