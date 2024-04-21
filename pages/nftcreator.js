
import { useEffect } from "react";
import ProgressComponents from "../components/NFTCreatorUtilsComponents/ProgressComponents";
import CreateAds from "../components/NFTCreatorUtilsComponents/SubPages/CreateAds/";
import CreateNFTCharacter from "../components/NFTCreatorUtilsComponents/SubPages/CreateNFTCharacter/";
import EPAds from "../components/NFTCreatorUtilsComponents/SubPages/EPAds";

import { useRTFStore } from "@/store";

const index = () => {
  const nftcreationstage = useRTFStore((state) => state.nftcreation_stage);

  return (
    <div>
      <ProgressComponents />
      {nftcreationstage == 1 && <CreateAds />}

      {nftcreationstage == 2 && <CreateNFTCharacter />}

      {nftcreationstage == 3 && <EPAds />}

    </div>
  );

}

export default index;
