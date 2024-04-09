import styles from "./index.module.css";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css/navigation";
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
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".slider-arrow-r",
          prevEl: ".slider-arrow-l",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {data.map((cardData, indx) => {
          return (
            <SwiperSlide key={indx}>
              <CardContainer
                title={cardData.title}
                imgUrl={cardData.imgUrl}
                ethPrice={cardData.ethPrice}
                is_stake={cardData.is_stake}
                is_staked={cardData.is_staked}


                likes={cardData.likes}
                views={cardData.views}
                key={indx}
              />
            </SwiperSlide>
          );
        })}
        {!isMobile && <SwiperSlide></SwiperSlide>}
        <div className="slider-controler">
          <div className="slider-arrow-l">
            <img src={"/arrow-left.svg"} />
          </div>
          <div className="slider-arrow-r">
            <img src={"/arrow-right.svg"} />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default index;
