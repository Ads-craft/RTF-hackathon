
import { useEffect } from "react";
import ProgressComponents from "../components/NFTCreatorUtilsComponents/ProgressComponents";
import CreateAds from "../components/NFTCreatorUtilsComponents/SubPages/CreateAds/";
import CreateNFTCharacter from "../components/NFTCreatorUtilsComponents/SubPages/CreateNFTCharacter/";
import { useRTFStore } from "@/store";

const index = () => {
  const nftcreationstage = useRTFStore((state) => state.nftcreation_stage);

  return (
    <div>
      <ProgressComponents progressState={nftcreationstage} />
      {nftcreationstage == 1 && <CreateAds />}

      {nftcreationstage == 2 && <CreateNFTCharacter />}
      <h1>Hello world!</h1>
    </div>
  );

}

export default index;
