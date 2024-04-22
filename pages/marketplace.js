import styles from "../styles/MarketPlace.module.css";
import CardSlider from "../components/UtilsComponents/CardSlider/";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import CreatorCardContainer from "../components/UtilsComponents/CreatorCardContainer/";
import { sendMsgToAI } from "./utils/openai";
import { OpenAiModal } from "@/components/modal/OpenAiModal";

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

  /*** CREATORS DATA **/
  /** CREATOR DATA MUST CONTAIN
   * userTag
   * userName
   * likes
   * views
   * userImg
   * */

  const [creators, setCreators] = useState([
    {
      userName: "Zach King",
      userTag: "zuck_king",
      userImg: "/creator_1.png",
      likes: 2.5,
      views: 2.5,
    },
    {
      userName: "Khaby Lame",
      userTag: "zuck_king",
      userImg: "/creator_2.png",
      likes: 2.5,
      views: 2.5,
    },
    {
      userName: "Mr Beast",
      userTag: "zuck_king",
      userImg: "/creator_3.png",
      likes: 2.5,
      views: 2.5,
    },
    {
      userName: "Mark Zuck",
      userTag: "zuck_king",
      userImg: "/creator_4.png",
      likes: 2.5,
      views: 2.5,
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <div>
      <div className={styles.creator_container}>
        <h1>
          Top<span>Creators</span>
        </h1>
        <Swiper
          key={isMobile ? "mobile" : "desktop"}
          spaceBetween={isMobile ? 0 : 120}
          slidesPerView={isMobile ? 1 : 3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".slider-arrow-r",
            prevEl: ".slider-arrow-l",
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {creators.map((creator) => {
            return (
              <SwiperSlide>
                <CreatorCardContainer
                  userName={creator.userName}
                  userTag={creator.userTag}
                  userImg={creator.userImg}
                  likes={creator.likes}
                  views={creator.views}
                />
              </SwiperSlide>
            );
          })}
          {!isMobile && <SwiperSlide></SwiperSlide>}
          <div className="slider-controler">
            <div
              className="slider-arrow-l"
              style={{ transform: "translateY(-9rem)" }}
            >
              <img src={"/arrow-left.svg"} />
            </div>
            <div
              className="slider-arrow-r"
              style={{ transform: "translateY(-9rem)" }}
            >
              <img src={"/arrow-right.svg"} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className={styles.banner}>
        <div className={styles.banner_info}>
          <h1>Generate and upload your Ads</h1>
          <p>
            Were excited to bring your nft to life,but we need your input.Please
            provide us with a brief description of what you want it to look
            like,or generate random image.
          </p>
          <OpenAiModal />
        </div>
        <div className={styles.banner_img}>
          <img src={"/wire_head.svg"} />
        </div>
      </div>
      <div className={styles.main_explore_container}>
        <h1>
          Trending <span>Ads</span>
          <i className="fa fa-bolt"></i>
        </h1>
        <CardSlider data={data} />
        <h1>
          Tops <span>NFTs</span>
        </h1>

        <CardSlider data={data} />
        <CardSlider data={data} />
        <CardSlider data={data} />
      </div>
    </div>
  );
};

export default index;
