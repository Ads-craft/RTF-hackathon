import styles from "../styles/Explore.module.css";
import CardContainer from "../components/UtilsComponents/CardContainer/";

const index = () => {
  return (
    <div className={styles.main_explore_container}>
      <CardContainer title={"WomanFaceNFT"} imgUrl={"/NFT6.png"} views={20} likes={2.3} ethPrice={0.00332} />{" "}
      <CardContainer title={"MustardFaceNFT"} imgUrl={"/NFT4.png"} views={20} likes={2.3} ethPrice={0.00332} />{" "}
       <CardContainer title={"WierdFaceNFT"} imgUrl={"/NFT2.png"} views={20} likes={2.3} ethPrice={0.00332} />{" "}
   
    </div>
  );
};

export default index;
