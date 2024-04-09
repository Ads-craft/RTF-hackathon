import styles from "./index.module.css";
import CardSlider from "../UtilsComponents/CardSlider";
import { useState, useEffect } from "react";


const index = ({ myNFTs, stakedNFTs, likedNFTs }) => {
  const [activeSubContainer, setActiveSubContainer] = useState("my nfts");
  useEffect(() => { }, [activeSubContainer])
  return (
    <div>
      <div className={styles.miniNav}>

        <h1 onClick={() => setActiveSubContainer("my nfts")}>My Nfts</h1>
        <h1 onClick={() => setActiveSubContainer("staked nfts")}>Staked Nfts</h1>
        <h1 onClick={() => setActiveSubContainer("liked nfts")}>Liked Nfts</h1>
        <h1 onClick={() => setActiveSubContainer("total rewards")}>Total Rewards</h1>
      </div>
      <div>
        {activeSubContainer == "my nfts" && <CardSlider data={myNFTs} />}

        {activeSubContainer == "staked nfts" && <CardSlider data={stakedNFTs} />}
        {activeSubContainer == "liked nfts" && <CardSlider data={likedNFTs} />}
        {activeSubContainer == "total rewards" && <CardSlider data={myNFTs} />}


      </div>
    </div>
  )
}

export default index;
