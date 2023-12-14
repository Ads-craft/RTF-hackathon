import styles from "./index.module.css";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import CardContainer from "../CardContainer/";

const index = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  return (
    <div className={styles.main_cards_container}>
      <Swiper
        spaceBetween={isMobile ? 0 : 120}
        slidesPerView={isMobile ? 1 : 3}
        pagination={true}
        modules={[Pagination]}
      >
        {data.map((cardData, indx) => {
          return (
            <SwiperSlide key={indx}>
              <CardContainer
                title={cardData.title}
                imgUrl={cardData.imgUrl}
                ethPrice={cardData.ethPrice}
                is_stake={cardData.is_stake}
                likes={cardData.likes}
                views={cardData.views}
                key={indx}
              />
            </SwiperSlide>
          );
        })}
        {!isMobile && <SwiperSlide></SwiperSlide>}
      </Swiper>
    </div>
  );
};

export default index;
