import styles from "../styles/Userprofile.module.css";
import UserProfileNTFUtils from "../components/UserProfileNFTUtils";
import { useState } from "react";

const index = () => {
  /* CARD DATA MUST CONTAIN */
  /**
   title ,
   imgUrl,
   views,
   likes,
   is_stake,
   is_staked
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
      is_stake: false,
      is_staked: true

    },

    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT5.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: false,
      is_staked: true

    },
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT3.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: false,
      is_staked: true
    },
  ]);


  /* CARD DATA MUST CONTAIN */
  /**
   title ,
   imgUrl,
   views,
   likes,
   is_stake,
   is_staked
   ethPrice,
**/

  const [dataStaked, setStakedData] = useState([
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT6.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000334,
      is_staked: true,
    },
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT2.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000234,
      is_staked: true,
    },
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT4.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: false,
      is_staked: true

    },

    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT5.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: false,
      is_staked: true

    },
    {
      title: "WomanFaceNFT",
      imgUrl: "/NFT3.png",
      views: 30,
      likes: 20,
      ethPrice: 0.000434,
      is_stake: false,
      is_staked: true
    },
  ]);



  return (
    <div className={styles.mainContainer}>
      <div className={styles.header_banner}>
        <i className="fa fa-plus-circle"></i>
        <div className={styles.profile_pic}><img src={"/monkeyhead.jpg"} /></div>
        <div><h1>User0r12353</h1><h3>@zach_king</h3></div>
      </div>
      <UserProfileNTFUtils myNFTs={data} stakedNFTs={dataStaked} likedNFTs={data} />

      <button className={styles.create_btn}>Create</button>
    </div>
  );
}


export default index;
