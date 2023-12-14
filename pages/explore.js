import styles from "../styles/Explore.module.css";
import CardSlider from "../components/UtilsComponents/CardSlider/";
import { useState } from "react";

const index = () => {
  /* CARD DATA MUST CONTAIN */
  /**
   title ,
   imgUrl,
   views,
   likes,
   is_stake,
   ethPrice,
**/

  const [data, setData] = useState([
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT6.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000334,
      is_stake: true,
    },
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT2.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000234,
      is_stake: true,
    },
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT4.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: true,
    },

    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT5.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: true,
    },
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT3.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: true,
    },
  ]);
  return (
    <div className={styles.main_explore_container}>
      <h1>
        Trending <span>Ads</span>
        <i className="fa fa-bolt"></i>
      </h1>
      <CardSlider data={data} />
      <h1>
        Tops <span>Ads</span>
      </h1>

      <CardSlider data={data} />
      <CardSlider data={data} />
      <CardSlider data={data} />
    </div>
  );
};

export default index;
